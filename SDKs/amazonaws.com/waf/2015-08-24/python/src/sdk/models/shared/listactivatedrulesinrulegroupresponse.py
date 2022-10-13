from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import activatedrule


@dataclass_json
@dataclass
class ListActivatedRulesInRuleGroupResponse:
    activated_rules: Optional[List[activatedrule.ActivatedRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActivatedRules' }})
    next_marker: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextMarker' }})
    
