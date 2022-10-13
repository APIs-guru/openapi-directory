from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import healthchecktype_enum


@dataclass_json
@dataclass
class HealthCheckConfig:
    failure_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FailureThreshold' }})
    resource_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ResourcePath' }})
    type: healthchecktype_enum.HealthCheckTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
