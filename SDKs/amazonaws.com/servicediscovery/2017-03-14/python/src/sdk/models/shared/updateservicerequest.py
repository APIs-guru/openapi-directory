from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import servicechange


@dataclass_json
@dataclass
class UpdateServiceRequest:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Id' }})
    service: servicechange.ServiceChange = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Service' }})
    
