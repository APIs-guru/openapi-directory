from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OsConstraintOsTypeEnum(str, Enum):
    OS_UNSPECIFIED = "OS_UNSPECIFIED"
    DESKTOP_MAC = "DESKTOP_MAC"
    DESKTOP_WINDOWS = "DESKTOP_WINDOWS"
    DESKTOP_LINUX = "DESKTOP_LINUX"
    DESKTOP_CHROME_OS = "DESKTOP_CHROME_OS"
    ANDROID = "ANDROID"
    IOS = "IOS"


@dataclass_json
@dataclass
class OsConstraint:
    minimum_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumVersion' }})
    os_type: Optional[OsConstraintOsTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osType' }})
    require_verified_chrome_os: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requireVerifiedChromeOs' }})
    
