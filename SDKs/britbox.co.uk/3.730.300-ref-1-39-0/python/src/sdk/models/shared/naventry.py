from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NavEntry:
    depth: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('depth') }})
    children: Optional[List[NavEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('children') }})
    content: Optional[NavContent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    featured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featured') }})
    icon: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('icon') }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    
