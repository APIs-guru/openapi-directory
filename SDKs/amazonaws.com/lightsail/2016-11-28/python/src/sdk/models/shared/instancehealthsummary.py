from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import instancehealthstate_enum
from . import instancehealthreason_enum


@dataclass_json
@dataclass
class InstanceHealthSummary:
    instance_health: Optional[instancehealthstate_enum.InstanceHealthStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceHealth' }})
    instance_health_reason: Optional[instancehealthreason_enum.InstanceHealthReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceHealthReason' }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    
