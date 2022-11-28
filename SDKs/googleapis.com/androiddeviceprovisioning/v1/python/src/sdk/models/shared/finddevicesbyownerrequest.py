from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class FindDevicesByOwnerRequestSectionTypeEnum(str, Enum):
    SECTION_TYPE_UNSPECIFIED = "SECTION_TYPE_UNSPECIFIED"
    SECTION_TYPE_SIM_LOCK = "SECTION_TYPE_SIM_LOCK"
    SECTION_TYPE_ZERO_TOUCH = "SECTION_TYPE_ZERO_TOUCH"


@dataclass_json
@dataclass
class FindDevicesByOwnerRequest:
    r"""FindDevicesByOwnerRequest
    Request to find devices by customers.
    """
    
    customer_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customerId') }})
    google_workspace_customer_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('googleWorkspaceCustomerId') }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('limit') }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageToken') }})
    section_type: Optional[FindDevicesByOwnerRequestSectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sectionType') }})
    
