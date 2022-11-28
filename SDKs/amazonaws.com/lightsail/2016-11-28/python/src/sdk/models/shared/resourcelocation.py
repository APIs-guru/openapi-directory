from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResourceLocation:
    r"""ResourceLocation
    Describes the resource location.
    """
    
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZone') }})
    region_name: Optional[RegionNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('regionName') }})
    
