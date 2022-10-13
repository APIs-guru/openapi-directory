from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerservicehealthcheckconfig


@dataclass_json
@dataclass
class ContainerServiceEndpoint:
    container_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    container_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerPort' }})
    health_check: Optional[containerservicehealthcheckconfig.ContainerServiceHealthCheckConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheck' }})
    
