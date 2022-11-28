from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class WorkspacesIPGroup:
    r"""WorkspacesIPGroup
    Describes an IP access control group.
    """
    
    group_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupDesc') }})
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupId') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupName') }})
    user_rules: Optional[List[IPRuleItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRules') }})
    
