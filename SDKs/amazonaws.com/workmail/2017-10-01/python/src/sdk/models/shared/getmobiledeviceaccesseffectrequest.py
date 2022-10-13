from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GetMobileDeviceAccessEffectRequest:
    device_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceModel' }})
    device_operating_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceOperatingSystem' }})
    device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceType' }})
    device_user_agent: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceUserAgent' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    
