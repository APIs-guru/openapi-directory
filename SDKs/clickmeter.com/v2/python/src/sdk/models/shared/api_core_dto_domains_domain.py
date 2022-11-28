from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class APICoreDtoDomainsDomainTypeEnum(str, Enum):
    SYSTEM = "System"
    GO = "Go"
    DEDICATED = "Dedicated"
    PERSONAL = "Personal"


@dataclass_json
@dataclass
class APICoreDtoDomainsDomain:
    custom404: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom404') }, 'form': { 'field_name': 'custom404' }})
    custom_homepage: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customHomepage') }, 'form': { 'field_name': 'customHomepage' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }, 'form': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }, 'form': { 'field_name': 'name' }})
    type: Optional[APICoreDtoDomainsDomainTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }, 'form': { 'field_name': 'type' }})
    
