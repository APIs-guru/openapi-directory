from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicesummary


@dataclass_json
@dataclass
class ListDevicesResponse:
    device_summaries: List[devicesummary.DeviceSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
