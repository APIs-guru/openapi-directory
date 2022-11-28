from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class EmailTypeEnum(str, Enum):
    PRIMARY = "primary"
    SECONDARY = "secondary"
    WORK = "work"
    PERSONAL = "personal"
    BILLING = "billing"
    OTHER = "other"


@dataclass_json
@dataclass
class Email:
    email: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[EmailTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
