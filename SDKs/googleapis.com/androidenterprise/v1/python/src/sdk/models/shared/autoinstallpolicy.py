from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AutoInstallPolicyAutoInstallModeEnum(str, Enum):
    AUTO_INSTALL_MODE_UNSPECIFIED = "autoInstallModeUnspecified"
    DO_NOT_AUTO_INSTALL = "doNotAutoInstall"
    AUTO_INSTALL_ONCE = "autoInstallOnce"
    FORCE_AUTO_INSTALL = "forceAutoInstall"


@dataclass_json
@dataclass
class AutoInstallPolicy:
    auto_install_constraint: Optional[List[AutoInstallConstraint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoInstallConstraint') }})
    auto_install_mode: Optional[AutoInstallPolicyAutoInstallModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoInstallMode') }})
    auto_install_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoInstallPriority') }})
    minimum_version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minimumVersionCode') }})
    
