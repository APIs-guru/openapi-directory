from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import deviceidentifier


@dataclass_json
@dataclass
class FindDevicesByDeviceIdentifierRequest:
    device_identifier: Optional[deviceidentifier.DeviceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceIdentifier' }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    
