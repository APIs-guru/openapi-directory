from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ItemListItemTypesEnum(str, Enum):
    MOVIE = "movie"
    SHOW = "show"
    SEASON = "season"
    EPISODE = "episode"
    PROGRAM = "program"
    LINK = "link"
    TRAILER = "trailer"
    CHANNEL = "channel"
    CUSTOM_ASSET = "customAsset"


@dataclass_json
@dataclass
class ItemList:
    r"""ItemList
    A pageable list of items.
    """
    
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    items: List[ItemSummary] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('items') }})
    paging: Pagination = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('paging') }})
    path: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('path') }})
    size: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('size') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    images: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    item_types: Optional[List[ItemListItemTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemTypes') }})
    list_data: Optional[ListData] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listData') }})
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parameter') }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shortDescription') }})
    tagline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tagline') }})
    themes: Optional[List[Theme]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('themes') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    
