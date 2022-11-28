from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ActivityTypeInfos:
    r"""ActivityTypeInfos
    Contains a paginated list of activity type information structures.
    """
    
    type_infos: List[ActivityTypeInfo] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('typeInfos') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
