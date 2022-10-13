from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import regionname_enum


@dataclass_json
@dataclass
class ResourceLocation:
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityZone' }})
    region_name: Optional[regionname_enum.RegionNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'regionName' }})
    
