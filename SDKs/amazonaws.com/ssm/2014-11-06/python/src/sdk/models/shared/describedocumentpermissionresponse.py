from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDocumentPermissionResponse:
    account_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountIds') }})
    account_sharing_info_list: Optional[List[AccountSharingInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AccountSharingInfoList') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
