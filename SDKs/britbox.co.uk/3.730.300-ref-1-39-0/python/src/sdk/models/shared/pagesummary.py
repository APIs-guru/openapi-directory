from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PageSummary:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_static: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isStatic') }})
    is_system_page: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSystemPage') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    template: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    
