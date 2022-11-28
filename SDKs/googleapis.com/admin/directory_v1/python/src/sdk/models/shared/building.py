from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Building:
    r"""Building
    Public API: Resources.buildings
    """
    
    address: Optional[BuildingAddress] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('address') }})
    building_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildingId') }})
    building_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buildingName') }})
    coordinates: Optional[BuildingCoordinates] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('coordinates') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    etags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('etags') }})
    floor_names: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('floorNames') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    
