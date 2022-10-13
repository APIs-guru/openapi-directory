from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ScreenviewData:
    app_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appName' }})
    mobile_device_branding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileDeviceBranding' }})
    mobile_device_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobileDeviceModel' }})
    screen_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'screenName' }})
    
