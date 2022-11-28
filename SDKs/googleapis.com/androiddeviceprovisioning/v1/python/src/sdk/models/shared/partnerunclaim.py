from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PartnerUnclaimSectionTypeEnum(str, Enum):
    SECTION_TYPE_UNSPECIFIED = "SECTION_TYPE_UNSPECIFIED"
    SECTION_TYPE_SIM_LOCK = "SECTION_TYPE_SIM_LOCK"
    SECTION_TYPE_ZERO_TOUCH = "SECTION_TYPE_ZERO_TOUCH"


@dataclass_json
@dataclass
class PartnerUnclaim:
    r"""PartnerUnclaim
    Identifies one unclaim request.
    """
    
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceId') }})
    device_identifier: Optional[DeviceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIdentifier') }})
    section_type: Optional[PartnerUnclaimSectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionType') }})
    vacation_mode_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vacationModeDays') }})
    vacation_mode_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vacationModeExpireTime') }})
    
