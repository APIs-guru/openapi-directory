from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import worldgenerationjoberrorcode_enum


@dataclass_json
@dataclass
class WorldFailure:
    failure_code: Optional[worldgenerationjoberrorcode_enum.WorldGenerationJobErrorCodeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCode' }})
    failure_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureCount' }})
    sample_failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sampleFailureReason' }})
    
