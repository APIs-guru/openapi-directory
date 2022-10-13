from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import accesspropertyvalue_enum
from . import accesspropertyvalue_enum
from . import accesspropertyvalue_enum
from . import accesspropertyvalue_enum
from . import accesspropertyvalue_enum
from . import accesspropertyvalue_enum
from . import accesspropertyvalue_enum
from . import accesspropertyvalue_enum


@dataclass_json
@dataclass
class WorkspaceAccessProperties:
    device_type_android: Optional[accesspropertyvalue_enum.AccessPropertyValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceTypeAndroid' }})
    device_type_chrome_os: Optional[accesspropertyvalue_enum.AccessPropertyValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceTypeChromeOs' }})
    device_type_ios: Optional[accesspropertyvalue_enum.AccessPropertyValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceTypeIos' }})
    device_type_linux: Optional[accesspropertyvalue_enum.AccessPropertyValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceTypeLinux' }})
    device_type_osx: Optional[accesspropertyvalue_enum.AccessPropertyValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceTypeOsx' }})
    device_type_web: Optional[accesspropertyvalue_enum.AccessPropertyValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceTypeWeb' }})
    device_type_windows: Optional[accesspropertyvalue_enum.AccessPropertyValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceTypeWindows' }})
    device_type_zero_client: Optional[accesspropertyvalue_enum.AccessPropertyValueEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceTypeZeroClient' }})
    
