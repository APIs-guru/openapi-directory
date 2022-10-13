from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import autoinstallconstraint

class AutoInstallPolicyAutoInstallModeEnum(str, Enum):
    AUTO_INSTALL_MODE_UNSPECIFIED = "autoInstallModeUnspecified"
    DO_NOT_AUTO_INSTALL = "doNotAutoInstall"
    AUTO_INSTALL_ONCE = "autoInstallOnce"
    FORCE_AUTO_INSTALL = "forceAutoInstall"


@dataclass_json
@dataclass
class AutoInstallPolicy:
    auto_install_constraint: Optional[List[autoinstallconstraint.AutoInstallConstraint]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoInstallConstraint' }})
    auto_install_mode: Optional[AutoInstallPolicyAutoInstallModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoInstallMode' }})
    auto_install_priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoInstallPriority' }})
    minimum_version_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minimumVersionCode' }})
    
