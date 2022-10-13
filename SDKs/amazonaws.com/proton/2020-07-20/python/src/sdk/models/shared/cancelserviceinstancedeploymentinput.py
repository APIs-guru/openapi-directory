from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CancelServiceInstanceDeploymentInput:
    service_instance_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceInstanceName' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
