from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateIPGroupRequest:
    group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    group_desc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupDesc') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tags') }})
    user_rules: Optional[List[IPRuleItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserRules') }})
    
