from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import autoscalingdescription
from . import provisionedcapacitydescription


@dataclass_json
@dataclass
class CapacityDescription:
    auto_scaling: Optional[autoscalingdescription.AutoScalingDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoScaling' }})
    provisioned_capacity: Optional[provisionedcapacitydescription.ProvisionedCapacityDescription] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'provisionedCapacity' }})
    
