from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import availabilityzone
from . import regionname_enum
from . import availabilityzone


@dataclass_json
@dataclass
class Region:
    availability_zones: Optional[List[availabilityzone.AvailabilityZone]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityZones' }})
    continent_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'continentCode' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[regionname_enum.RegionNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    relational_database_availability_zones: Optional[List[availabilityzone.AvailabilityZone]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseAvailabilityZones' }})
    
