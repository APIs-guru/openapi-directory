from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicetier


@dataclass_json
@dataclass
class DeviceTierSet:
    device_tiers: Optional[List[devicetier.DeviceTier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceTiers' }})
    
