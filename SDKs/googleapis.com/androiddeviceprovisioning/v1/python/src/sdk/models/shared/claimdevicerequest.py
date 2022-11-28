from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ClaimDeviceRequestSectionTypeEnum(str, Enum):
    SECTION_TYPE_UNSPECIFIED = "SECTION_TYPE_UNSPECIFIED"
    SECTION_TYPE_SIM_LOCK = "SECTION_TYPE_SIM_LOCK"
    SECTION_TYPE_ZERO_TOUCH = "SECTION_TYPE_ZERO_TOUCH"


@dataclass_json
@dataclass
class ClaimDeviceRequest:
    r"""ClaimDeviceRequest
    Request message to claim a device on behalf of a customer.
    """
    
    customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    device_identifier: Optional[DeviceIdentifier] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceIdentifier') }})
    device_metadata: Optional[DeviceMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceMetadata') }})
    google_workspace_customer_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleWorkspaceCustomerId') }})
    pre_provisioning_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preProvisioningToken') }})
    section_type: Optional[ClaimDeviceRequestSectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionType') }})
    simlock_profile_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('simlockProfileId') }})
    
