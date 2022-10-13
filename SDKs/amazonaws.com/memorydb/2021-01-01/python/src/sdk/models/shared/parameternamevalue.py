from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ParameterNameValue:
    parameter_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterName' }})
    parameter_value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterValue' }})
    
