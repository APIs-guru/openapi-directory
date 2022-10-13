from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import deviceidentifier

class PartnerUnclaimSectionTypeEnum(str, Enum):
    SECTION_TYPE_UNSPECIFIED = "SECTION_TYPE_UNSPECIFIED"
    SECTION_TYPE_SIM_LOCK = "SECTION_TYPE_SIM_LOCK"
    SECTION_TYPE_ZERO_TOUCH = "SECTION_TYPE_ZERO_TOUCH"


@dataclass_json
@dataclass
class PartnerUnclaim:
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceId' }})
    device_identifier: Optional[deviceidentifier.DeviceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceIdentifier' }})
    section_type: Optional[PartnerUnclaimSectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionType' }})
    vacation_mode_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vacationModeDays' }})
    vacation_mode_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vacationModeExpireTime' }})
    
