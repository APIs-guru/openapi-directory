from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import wafaction
from . import excludedrule
from . import wafoverrideaction
from . import wafruletype_enum


@dataclass_json
@dataclass
class ActivatedRule:
    action: Optional[wafaction.WafAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    excluded_rules: Optional[List[excludedrule.ExcludedRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludedRules' }})
    override_action: Optional[wafoverrideaction.WafOverrideAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverrideAction' }})
    priority: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    rule_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleId' }})
    type: Optional[wafruletype_enum.WafRuleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
