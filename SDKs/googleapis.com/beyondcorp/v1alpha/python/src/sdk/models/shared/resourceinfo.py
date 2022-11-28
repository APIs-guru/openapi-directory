from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ResourceInfoStatusEnum(str, Enum):
    HEALTH_STATUS_UNSPECIFIED = "HEALTH_STATUS_UNSPECIFIED"
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    UNRESPONSIVE = "UNRESPONSIVE"
    DEGRADED = "DEGRADED"


@dataclass_json
@dataclass
class ResourceInfo:
    r"""ResourceInfo
    ResourceInfo represents the information/status of the associated resource.
    """
    
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    resource: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    status: Optional[ResourceInfoStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    sub: Optional[List[ResourceInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sub') }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    
