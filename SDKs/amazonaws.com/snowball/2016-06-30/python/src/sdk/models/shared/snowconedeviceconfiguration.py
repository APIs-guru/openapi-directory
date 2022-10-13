from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import wirelessconnection


@dataclass_json
@dataclass
class SnowconeDeviceConfiguration:
    wireless_connection: Optional[wirelessconnection.WirelessConnection] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WirelessConnection' }})
    
