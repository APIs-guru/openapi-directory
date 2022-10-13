from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AvailabilityZone:
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    zone_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ZoneName' }})
    
