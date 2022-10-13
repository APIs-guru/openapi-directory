from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import containerservicehealthcheckconfig


@dataclass_json
@dataclass
class EndpointRequest:
    container_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerName' }})
    container_port: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containerPort' }})
    health_check: Optional[containerservicehealthcheckconfig.ContainerServiceHealthCheckConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'healthCheck' }})
    
