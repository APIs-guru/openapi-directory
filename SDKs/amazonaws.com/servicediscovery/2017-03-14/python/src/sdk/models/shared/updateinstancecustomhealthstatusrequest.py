from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import customhealthstatus_enum


@dataclass_json
@dataclass
class UpdateInstanceCustomHealthStatusRequest:
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    service_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServiceId' }})
    status: customhealthstatus_enum.CustomHealthStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
