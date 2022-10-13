from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import resourceinfo

class ResourceInfoStatusEnum(str, Enum):
    HEALTH_STATUS_UNSPECIFIED = "HEALTH_STATUS_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    UNRESPONSIVE = "UNRESPONSIVE"
    DEGRADED = "DEGRADED"


@dataclass_json
@dataclass
class ResourceInfo:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    resource: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    status: Optional[ResourceInfoStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sub: Optional[List[resourceinfo.ResourceInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub' }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    
