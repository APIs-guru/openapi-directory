from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PersonalUsagePoliciesPersonalPlayStoreModeEnum(str, Enum):
    PLAY_STORE_MODE_UNSPECIFIED = "PLAY_STORE_MODE_UNSPECIFIED"
    BLACKLIST = "BLACKLIST"
    BLOCKLIST = "BLOCKLIST"
    ALLOWLIST = "ALLOWLIST"


@dataclass_json
@dataclass
class PersonalUsagePolicies:
    r"""PersonalUsagePolicies
    Policies controlling personal usage on a company-owned device with a work profile.
    """
    
    account_types_with_management_disabled: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountTypesWithManagementDisabled') }})
    camera_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cameraDisabled') }})
    max_days_with_work_off: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDaysWithWorkOff') }})
    personal_applications: Optional[List[PersonalApplicationPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalApplications') }})
    personal_play_store_mode: Optional[PersonalUsagePoliciesPersonalPlayStoreModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personalPlayStoreMode') }})
    screen_capture_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('screenCaptureDisabled') }})
    
