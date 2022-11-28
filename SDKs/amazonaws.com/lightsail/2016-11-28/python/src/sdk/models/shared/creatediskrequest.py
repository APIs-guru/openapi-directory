from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDiskRequest:
    availability_zone: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    disk_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('diskName') }})
    size_in_gb: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sizeInGb') }})
    add_ons: Optional[List[AddOnRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addOns') }})
    tags: Optional[List[Tag]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
