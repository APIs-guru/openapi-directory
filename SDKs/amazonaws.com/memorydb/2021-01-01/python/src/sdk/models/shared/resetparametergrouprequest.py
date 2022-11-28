from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ResetParameterGroupRequest:
    parameter_group_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterGroupName') }})
    all_parameters: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllParameters') }})
    parameter_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ParameterNames') }})
    
