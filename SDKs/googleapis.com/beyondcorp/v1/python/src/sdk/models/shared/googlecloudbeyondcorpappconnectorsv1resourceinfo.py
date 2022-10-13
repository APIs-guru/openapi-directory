from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import googlecloudbeyondcorpappconnectorsv1resourceinfo

class GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum(str, Enum):
    HEALTH_STATUS_UNSPECIFIED = "HEALTH_STATUS_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    UNRESPONSIVE = "UNRESPONSIVE"
    DEGRADED = "DEGRADED"


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo:
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    resource: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    status: Optional[GoogleCloudBeyondcorpAppconnectorsV1ResourceInfoStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    sub: Optional[List[googlecloudbeyondcorpappconnectorsv1resourceinfo.GoogleCloudBeyondcorpAppconnectorsV1ResourceInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sub' }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    
