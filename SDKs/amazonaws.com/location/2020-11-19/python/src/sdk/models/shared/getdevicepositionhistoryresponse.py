from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import deviceposition


@dataclass_json
@dataclass
class GetDevicePositionHistoryResponse:
    device_positions: List[deviceposition.DevicePosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DevicePositions' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
