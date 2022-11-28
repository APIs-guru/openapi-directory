from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    number: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('number') }})
    area_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('area_code') }})
    country_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('country_code') }})
    extension: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('extension') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[PhoneNumberTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
