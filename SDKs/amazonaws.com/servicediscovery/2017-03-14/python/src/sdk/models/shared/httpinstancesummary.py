from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import healthstatus_enum


@dataclass_json
@dataclass
class HTTPInstanceSummary:
    attributes: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attributes' }})
    health_status: Optional[healthstatus_enum.HealthStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HealthStatus' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    namespace_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NamespaceName' }})
    service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceName' }})
    
