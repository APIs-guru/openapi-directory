from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import ruleupdate


@dataclass_json
@dataclass
class UpdateRuleRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    rule_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleId' }})
    updates: List[ruleupdate.RuleUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Updates' }})
    
