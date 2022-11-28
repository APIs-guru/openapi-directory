from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RevokeIPRulesRequest:
    group_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    user_rules: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserRules') }})
    
