from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import homeregioncontrol


@dataclass_json
@dataclass
class CreateHomeRegionControlResult:
    home_region_control: Optional[homeregioncontrol.HomeRegionControl] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeRegionControl' }})
    
