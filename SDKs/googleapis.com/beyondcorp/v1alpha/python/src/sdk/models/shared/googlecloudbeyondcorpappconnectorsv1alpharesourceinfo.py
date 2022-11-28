from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum(str, Enum):
    HEALTH_STATUS_UNSPECIFIED = "HEALTH_STATUS_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    UNRESPONSIVE = "UNRESPONSIVE"
    DEGRADED = "DEGRADED"


@dataclass_json
@dataclass
class GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo:
    r"""GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo
    ResourceInfo represents the information/status of an app connector resource. Such as: - remote_agent - container - runtime - appgateway - appconnector - appconnection - tunnel - logagent
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    resource: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    status: Optional[GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfoStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sub: Optional[List[GoogleCloudBeyondcorpAppconnectorsV1alphaResourceInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    
