from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class DeviceClaimAdditionalServiceEnum(str, Enum):
    ADDITIONAL_SERVICE_UNSPECIFIED = "ADDITIONAL_SERVICE_UNSPECIFIED"
    DEVICE_PROTECTION = "DEVICE_PROTECTION"

class DeviceClaimSectionTypeEnum(str, Enum):
    SECTION_TYPE_UNSPECIFIED = "SECTION_TYPE_UNSPECIFIED"
    SECTION_TYPE_SIM_LOCK = "SECTION_TYPE_SIM_LOCK"
    SECTION_TYPE_ZERO_TOUCH = "SECTION_TYPE_ZERO_TOUCH"


@dataclass_json
@dataclass
class DeviceClaim:
    additional_service: Optional[DeviceClaimAdditionalServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalService' }})
    owner_company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerCompanyId' }})
    reseller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resellerId' }})
    section_type: Optional[DeviceClaimSectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionType' }})
    vacation_mode_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vacationModeExpireTime' }})
    vacation_mode_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vacationModeStartTime' }})
    
