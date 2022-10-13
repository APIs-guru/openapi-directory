from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assertionrule
from . import gatingrule


@dataclass_json
@dataclass
class DescribeSafetyRuleResponse:
    assertion_rule: Optional[assertionrule.AssertionRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssertionRule' }})
    gating_rule: Optional[gatingrule.GatingRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GatingRule' }})
    
