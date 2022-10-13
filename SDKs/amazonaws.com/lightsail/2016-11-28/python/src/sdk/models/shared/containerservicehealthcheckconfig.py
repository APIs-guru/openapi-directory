from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ContainerServiceHealthCheckConfig:
    healthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthyThreshold' }})
    interval_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'intervalSeconds' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    success_codes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'successCodes' }})
    timeout_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeoutSeconds' }})
    unhealthy_threshold: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unhealthyThreshold' }})
    
