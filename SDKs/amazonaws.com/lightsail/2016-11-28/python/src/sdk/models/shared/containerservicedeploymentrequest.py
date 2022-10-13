from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import container
from . import endpointrequest


@dataclass_json
@dataclass
class ContainerServiceDeploymentRequest:
    containers: Optional[dict[str, container.Container]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'containers' }})
    public_endpoint: Optional[endpointrequest.EndpointRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicEndpoint' }})
    
