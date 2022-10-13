from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class FindDevicesByOwnerRequestSectionTypeEnum(str, Enum):
    SECTION_TYPE_UNSPECIFIED = "SECTION_TYPE_UNSPECIFIED"
    SECTION_TYPE_SIM_LOCK = "SECTION_TYPE_SIM_LOCK"
    SECTION_TYPE_ZERO_TOUCH = "SECTION_TYPE_ZERO_TOUCH"


@dataclass_json
@dataclass
class FindDevicesByOwnerRequest:
    customer_id: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customerId' }})
    limit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'limit' }})
    page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageToken' }})
    section_type: Optional[FindDevicesByOwnerRequestSectionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sectionType' }})
    
