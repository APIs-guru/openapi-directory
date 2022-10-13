from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import actiontarget


@dataclass_json
@dataclass
class DescribeActionTargetsResponse:
    action_targets: List[actiontarget.ActionTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActionTargets' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
