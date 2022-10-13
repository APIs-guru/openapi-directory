from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import service


@dataclass_json
@dataclass
class CreateServiceOutput:
    service: service.Service = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    
