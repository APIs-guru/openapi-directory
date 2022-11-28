from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AuthorizeIPRulesRequest:
    group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    user_rules: List[IPRuleItem] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserRules') }})
    
