from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Region:
    r"""Region
    Describes the AWS Region.
    """
    
    availability_zones: Optional[List[AvailabilityZone]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availabilityZones') }})
    continent_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('continentCode') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    name: Optional[RegionNameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    relational_database_availability_zones: Optional[List[AvailabilityZone]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseAvailabilityZones') }})
    
