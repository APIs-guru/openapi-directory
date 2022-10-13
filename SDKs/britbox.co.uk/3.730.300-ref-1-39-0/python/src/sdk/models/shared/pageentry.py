from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import itemsummary
from . import itemlist
from . import person

class PageEntryTypeEnum(str, Enum):
    ITEM_ENTRY = "ItemEntry"
    ITEM_DETAIL_ENTRY = "ItemDetailEntry"
    LIST_ENTRY = "ListEntry"
    LIST_DETAIL_ENTRY = "ListDetailEntry"
    USER_ENTRY = "UserEntry"
    TEXT_ENTRY = "TextEntry"
    IMAGE_ENTRY = "ImageEntry"
    CUSTOM_ENTRY = "CustomEntry"
    PEOPLE_ENTRY = "PeopleEntry"


@dataclass_json
@dataclass
class PageEntry:
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    item: Optional[itemsummary.ItemSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'item' }})
    list: Optional[itemlist.ItemList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'list' }})
    people: Optional[List[person.Person]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'people' }})
    template: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'template' }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: PageEntryTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
