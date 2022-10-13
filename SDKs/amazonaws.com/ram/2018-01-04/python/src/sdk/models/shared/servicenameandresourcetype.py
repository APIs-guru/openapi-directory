from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ServiceNameAndResourceType:
    resource_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceType' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serviceName' }})
    
