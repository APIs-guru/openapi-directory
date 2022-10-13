from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import serviceinstance


@dataclass_json
@dataclass
class CancelServiceInstanceDeploymentOutput:
    service_instance: serviceinstance.ServiceInstance = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceInstance' }})
    
