from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import parameter


@dataclass_json
@dataclass
class GetParametersResult:
    invalid_parameters: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InvalidParameters' }})
    parameters: Optional[List[parameter.Parameter]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Parameters' }})
    
