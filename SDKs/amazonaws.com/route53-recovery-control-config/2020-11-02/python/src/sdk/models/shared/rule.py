from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import assertionrule
from . import gatingrule


@dataclass_json
@dataclass
class Rule:
    assertion: Optional[assertionrule.AssertionRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ASSERTION' }})
    gating: Optional[gatingrule.GatingRule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GATING' }})
    
