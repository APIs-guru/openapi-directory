from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import rulegroupupdate


@dataclass_json
@dataclass
class UpdateRuleGroupRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    rule_group_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroupId' }})
    updates: List[rulegroupupdate.RuleGroupUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Updates' }})
    
