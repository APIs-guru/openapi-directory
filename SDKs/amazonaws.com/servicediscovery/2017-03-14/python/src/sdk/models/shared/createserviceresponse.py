from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import service


@dataclass_json
@dataclass
class CreateServiceResponse:
    service: Optional[service.Service] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Service' }})
    
