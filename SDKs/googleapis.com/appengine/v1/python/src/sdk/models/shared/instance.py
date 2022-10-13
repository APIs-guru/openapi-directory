from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class InstanceAvailabilityEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    RESIDENT = "RESIDENT"
    DYNAMIC = "DYNAMIC"

class InstanceVMLivenessEnum(str, Enum):
    LIVENESS_STATE_UNSPECIFIED = "LIVENESS_STATE_UNSPECIFIED"
    UNKNOWN = "UNKNOWN"
    HEALTHY = "HEALTHY"
    UNHEALTHY = "UNHEALTHY"
    DRAINING = "DRAINING"
    TIMEOUT = "TIMEOUT"


@dataclass_json
@dataclass
class Instance:
    app_engine_release: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appEngineRelease' }})
    availability: Optional[InstanceAvailabilityEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    average_latency: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'averageLatency' }})
    errors: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errors' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    memory_usage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memoryUsage' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    qps: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'qps' }})
    requests: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    vm_debug_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmDebugEnabled' }})
    vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmId' }})
    vm_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmIp' }})
    vm_liveness: Optional[InstanceVMLivenessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmLiveness' }})
    vm_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmName' }})
    vm_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmStatus' }})
    vm_zone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmZoneName' }})
    
