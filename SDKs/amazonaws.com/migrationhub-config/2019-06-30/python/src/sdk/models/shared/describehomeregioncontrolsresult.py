from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import homeregioncontrol


@dataclass_json
@dataclass
class DescribeHomeRegionControlsResult:
    home_region_controls: Optional[List[homeregioncontrol.HomeRegionControl]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'HomeRegionControls' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
