from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from . import pageentry
from . import itemdetail
from . import itemlist
from . import pagemetadata
from . import theme


@dataclass_json
@dataclass
class Page:
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    entries: List[pageentry.PageEntry] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'entries' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_static: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isStatic' }})
    is_system_page: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isSystemPage' }})
    item: Optional[itemdetail.ItemDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    list: Optional[itemlist.ItemList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list' }})
    metadata: Optional[pagemetadata.PageMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    template: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    themes: Optional[List[theme.Theme]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'themes' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
