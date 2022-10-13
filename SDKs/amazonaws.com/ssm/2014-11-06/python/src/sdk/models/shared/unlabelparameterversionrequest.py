from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UnlabelParameterVersionRequest:
    labels: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Labels' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    parameter_version: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ParameterVersion' }})
    
