from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CanaryRunConfigOutput:
    active_tracing: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ActiveTracing' }})
    memory_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MemoryInMB' }})
    timeout_in_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeoutInSeconds' }})
    
