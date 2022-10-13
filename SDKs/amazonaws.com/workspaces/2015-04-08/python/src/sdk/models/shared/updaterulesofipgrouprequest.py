from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import ipruleitem


@dataclass_json
@dataclass
class UpdateRulesOfIPGroupRequest:
    group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupId' }})
    user_rules: List[ipruleitem.IPRuleItem] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserRules' }})
    
