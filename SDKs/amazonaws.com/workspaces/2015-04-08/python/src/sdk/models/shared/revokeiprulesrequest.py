from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RevokeIPRulesRequest:
    group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupId' }})
    user_rules: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserRules' }})
    
