from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceInfo:
    service_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceCode' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    
