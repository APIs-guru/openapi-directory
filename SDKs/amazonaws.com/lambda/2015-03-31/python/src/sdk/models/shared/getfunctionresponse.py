from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import functioncodelocation
from . import concurrency
from . import functionconfiguration


@dataclass_json
@dataclass
class GetFunctionResponse:
    code: Optional[functioncodelocation.FunctionCodeLocation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Code' }})
    concurrency: Optional[concurrency.Concurrency] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Concurrency' }})
    configuration: Optional[functionconfiguration.FunctionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configuration' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
