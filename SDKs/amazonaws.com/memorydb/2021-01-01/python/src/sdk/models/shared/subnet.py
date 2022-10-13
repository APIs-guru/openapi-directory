from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import availabilityzone


@dataclass_json
@dataclass
class Subnet:
    availability_zone: Optional[availabilityzone.AvailabilityZone] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    identifier: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Identifier' }})
    
