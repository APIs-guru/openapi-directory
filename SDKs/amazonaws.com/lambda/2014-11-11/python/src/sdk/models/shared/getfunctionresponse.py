from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import functioncodelocation
from . import functionconfiguration


@dataclass_json
@dataclass
class GetFunctionResponse:
    code: Optional[functioncodelocation.FunctionCodeLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    configuration: Optional[functionconfiguration.FunctionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configuration' }})
    
