from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import service


@dataclass_json
@dataclass
class GetServiceOutput:
    service: Optional[service.Service] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'service' }})
    
