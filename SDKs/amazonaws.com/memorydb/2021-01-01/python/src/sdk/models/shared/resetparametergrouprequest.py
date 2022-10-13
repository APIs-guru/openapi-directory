from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ResetParameterGroupRequest:
    all_parameters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AllParameters' }})
    parameter_group_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroupName' }})
    parameter_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterNames' }})
    
