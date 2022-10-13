from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import servingcontext
from . import disapproval
from . import disapproval

class ServingRestrictionStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    DISAPPROVAL = "DISAPPROVAL"
    PENDING_REVIEW = "PENDING_REVIEW"


@dataclass_json
@dataclass
class ServingRestriction:
    contexts: Optional[List[servingcontext.ServingContext]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contexts' }})
    disapproval: Optional[disapproval.Disapproval] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disapproval' }})
    disapproval_reasons: Optional[List[disapproval.Disapproval]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disapprovalReasons' }})
    status: Optional[ServingRestrictionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
