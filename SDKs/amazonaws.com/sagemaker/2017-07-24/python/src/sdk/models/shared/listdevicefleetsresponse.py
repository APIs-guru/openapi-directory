from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicefleetsummary


@dataclass_json
@dataclass
class ListDeviceFleetsResponse:
    device_fleet_summaries: List[devicefleetsummary.DeviceFleetSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceFleetSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
