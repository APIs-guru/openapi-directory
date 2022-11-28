from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Page:
    entries: List[PageEntry] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('entries') }})
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_static: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isStatic') }})
    is_system_page: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('isSystemPage') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    template: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    item: Optional[ItemDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    list: Optional[ItemList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list') }})
    metadata: Optional[PageMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    themes: Optional[List[Theme]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('themes') }})
    
