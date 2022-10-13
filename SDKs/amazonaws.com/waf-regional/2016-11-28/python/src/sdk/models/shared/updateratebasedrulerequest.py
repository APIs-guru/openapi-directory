from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import ruleupdate


@dataclass_json
@dataclass
class UpdateRateBasedRuleRequest:
    change_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ChangeToken' }})
    rate_limit: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RateLimit' }})
    rule_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleId' }})
    updates: List[ruleupdate.RuleUpdate] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Updates' }})
    
