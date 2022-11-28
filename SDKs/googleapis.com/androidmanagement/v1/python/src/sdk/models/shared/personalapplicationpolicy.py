from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PersonalApplicationPolicyInstallTypeEnum(str, Enum):
    INSTALL_TYPE_UNSPECIFIED = "INSTALL_TYPE_UNSPECIFIED"
    BLOCKED = "BLOCKED"
    AVAILABLE = "AVAILABLE"


@dataclass_json
@dataclass
class PersonalApplicationPolicy:
    r"""PersonalApplicationPolicy
    Policies for apps in the personal profile of a company-owned device with a work profile.
    """
    
    install_type: Optional[PersonalApplicationPolicyInstallTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installType') }})
    package_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('packageName') }})
    
