from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ServingRestrictionStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    DISAPPROVAL = "DISAPPROVAL"
    PENDING_REVIEW = "PENDING_REVIEW"


@dataclass_json
@dataclass
class ServingRestriction:
    r"""ServingRestriction
    Output only. A representation of the status of an ad in a specific context. A context here relates to where something ultimately serves (for example, a user or publisher geo, a platform, an HTTPS versus HTTP request, or the type of auction).
    """
    
    contexts: Optional[List[ServingContext]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contexts') }})
    disapproval: Optional[Disapproval] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disapproval') }})
    disapproval_reasons: Optional[List[Disapproval]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disapprovalReasons') }})
    status: Optional[ServingRestrictionStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
