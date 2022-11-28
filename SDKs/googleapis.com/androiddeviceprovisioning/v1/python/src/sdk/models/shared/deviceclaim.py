from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""DeviceClaim
    A record of a device claimed by a reseller for a customer. Devices claimed for zero-touch enrollment have a claim with the type `SECTION_TYPE_ZERO_TOUCH`. To learn more, read [Claim devices for customers](/zero-touch/guides/how-it-works#claim).
    """
    
    additional_service: Optional[DeviceClaimAdditionalServiceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalService') }})
    google_workspace_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleWorkspaceCustomerId') }})
    owner_company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerCompanyId') }})
    reseller_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resellerId') }})
    section_type: Optional[DeviceClaimSectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionType') }})
    vacation_mode_expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vacationModeExpireTime') }})
    vacation_mode_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vacationModeStartTime') }})
    
