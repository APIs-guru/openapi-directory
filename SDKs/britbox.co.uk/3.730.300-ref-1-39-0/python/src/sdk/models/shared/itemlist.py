from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import itemsummary
from . import listdata
from . import pagination
from . import theme

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
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    item_types: Optional[List[ItemListItemTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemTypes' }})
    items: List[itemsummary.ItemSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    list_data: Optional[listdata.ListData] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listData' }})
    paging: pagination.Pagination = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paging' }})
    parameter: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parameter' }})
    path: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    short_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shortDescription' }})
    size: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    tagline: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tagline' }})
    themes: Optional[List[theme.Theme]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'themes' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
