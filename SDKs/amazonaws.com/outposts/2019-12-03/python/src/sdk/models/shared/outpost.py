from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Outpost:
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    availability_zone_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZoneId' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    life_cycle_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LifeCycleStatus' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    outpost_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutpostArn' }})
    outpost_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutpostId' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    site_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SiteArn' }})
    site_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SiteId' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tags' }})
    
