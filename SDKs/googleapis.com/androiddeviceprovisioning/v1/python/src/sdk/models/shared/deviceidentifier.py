from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeviceIdentifierDeviceTypeEnum(str, Enum):
    DEVICE_TYPE_UNSPECIFIED = "DEVICE_TYPE_UNSPECIFIED"
    DEVICE_TYPE_ANDROID = "DEVICE_TYPE_ANDROID"
    DEVICE_TYPE_CHROME_OS = "DEVICE_TYPE_CHROME_OS"


@dataclass_json
@dataclass
class DeviceIdentifier:
    r"""DeviceIdentifier
    Encapsulates hardware and product IDs to identify a manufactured device. To understand requirements on identifier sets, read [Identifiers](https://developers.google.com/zero-touch/guides/identifiers).
    """
    
    chrome_os_attested_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('chromeOsAttestedDeviceId') }})
    device_type: Optional[DeviceIdentifierDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    imei: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imei') }})
    manufacturer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('manufacturer') }})
    meid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('meid') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    serial_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serialNumber') }})
    
