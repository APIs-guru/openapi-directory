from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class WebsiteTypeEnum(str, Enum):
    PRIMARY = "primary"
    SECONDARY = "secondary"
    WORK = "work"
    PERSONAL = "personal"
    OTHER = "other"


@dataclass_json
@dataclass
class Website:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[WebsiteTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
