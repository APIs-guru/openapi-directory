from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RegisterContainerImageRequest:
    digest: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'digest' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    service_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
