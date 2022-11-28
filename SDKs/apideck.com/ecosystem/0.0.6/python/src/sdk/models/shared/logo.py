from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class LogoTypeEnum(str, Enum):
    LOGO = "LOGO"
    BANNER = "BANNER"
    SCREENSHOT = "SCREENSHOT"


@dataclass_json
@dataclass
class Logo:
    url: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    content_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_type') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    type: Optional[LogoTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
