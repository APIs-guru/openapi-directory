from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicetierconfig


@dataclass_json
@dataclass
class ListDeviceTierConfigsResponse:
    device_tier_configs: Optional[List[devicetierconfig.DeviceTierConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceTierConfigs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
