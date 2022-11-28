from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""PageEntry
    Represents an entry of a Page.
    Defines what specific piece of content should be presented e.g. an Item or ItemList.
    Also defines what visual template should be used to render that content.
    
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    template: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: PageEntryTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    images: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    item: Optional[ItemSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('item') }})
    list: Optional[ItemList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('list') }})
    people: Optional[List[Person]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('people') }})
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
