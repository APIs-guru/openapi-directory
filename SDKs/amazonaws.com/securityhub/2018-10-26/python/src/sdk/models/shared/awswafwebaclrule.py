from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import wafaction
from . import wafexcludedrule
from . import wafoverrideaction


@dataclass_json
@dataclass
class AwsWafWebACLRule:
    action: Optional[wafaction.WafAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Action' }})
    excluded_rules: Optional[List[wafexcludedrule.WafExcludedRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExcludedRules' }})
    override_action: Optional[wafoverrideaction.WafOverrideAction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OverrideAction' }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Priority' }})
    rule_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RuleId' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
