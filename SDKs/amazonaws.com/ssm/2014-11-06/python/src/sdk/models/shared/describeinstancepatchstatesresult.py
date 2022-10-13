from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instancepatchstate


@dataclass_json
@dataclass
class DescribeInstancePatchStatesResult:
    instance_patch_states: Optional[List[instancepatchstate.InstancePatchState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstancePatchStates' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
