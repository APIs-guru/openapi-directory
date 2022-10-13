from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import parametergroup


@dataclass_json
@dataclass
class UpdateParameterGroupResponse:
    parameter_group: Optional[parametergroup.ParameterGroup] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterGroup' }})
    
