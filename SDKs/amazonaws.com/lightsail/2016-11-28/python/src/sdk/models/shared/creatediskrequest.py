from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import addonrequest
from . import tag


@dataclass_json
@dataclass
class CreateDiskRequest:
    add_ons: Optional[List[addonrequest.AddOnRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'addOns' }})
    availability_zone: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityZone' }})
    disk_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskName' }})
    size_in_gb: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sizeInGb' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
