from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListLunsResponse:
    r"""ListLunsResponse
    Response message containing the list of storage volume luns.
    """
    
    luns: Optional[List[Lun]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('luns') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unreachable') }})
    
