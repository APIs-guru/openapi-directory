from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rulegroup


@dataclass_json
@dataclass
class CreateRuleGroupResponse:
    change_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    rule_group: Optional[rulegroup.RuleGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleGroup' }})
    
