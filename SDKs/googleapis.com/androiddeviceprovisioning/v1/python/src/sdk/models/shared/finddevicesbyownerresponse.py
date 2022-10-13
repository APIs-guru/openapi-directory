from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import device


@dataclass_json
@dataclass
class FindDevicesByOwnerResponse:
    devices: Optional[List[device.Device]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devices' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
