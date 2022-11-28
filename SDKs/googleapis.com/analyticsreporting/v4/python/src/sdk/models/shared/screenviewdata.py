from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScreenviewData:
    app_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('appName') }})
    mobile_device_branding: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileDeviceBranding') }})
    mobile_device_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mobileDeviceModel') }})
    screen_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenName') }})
    
