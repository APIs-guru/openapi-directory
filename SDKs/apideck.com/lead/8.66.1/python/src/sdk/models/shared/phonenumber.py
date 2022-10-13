from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PhoneNumberTypeEnum(str, Enum):
    PRIMARY = "primary"
    SECONDARY = "secondary"
    HOME = "home"
    WORK = "work"
    OFFICE = "office"
    MOBILE = "mobile"
    ASSISTANT = "assistant"
    FAX = "fax"
    DIRECT_DIAL_IN = "direct-dial-in"
    PERSONAL = "personal"
    OTHER = "other"


@dataclass_json
@dataclass
class PhoneNumber:
    area_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'area_code' }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'country_code' }})
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'extension' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    number: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'number' }})
    type: Optional[PhoneNumberTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
