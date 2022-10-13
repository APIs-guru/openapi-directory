from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class PaginationOptionsItemTypeEnum(str, Enum):
    MOVIE = "movie"
    SHOW = "show"
    SEASON = "season"
    EPISODE = "episode"
    PROGRAM = "program"
    LINK = "link"
    TRAILER = "trailer"
    CHANNEL = "channel"
    CUSTOM_ASSET = "customAsset"

class PaginationOptionsOrderEnum(str, Enum):
    ASC = "asc"
    DESC = "desc"

class PaginationOptionsOrderByEnum(str, Enum):
    A_Z = "a-z"
    RELEASE_YEAR = "release-year"
    DATE_ADDED = "date-added"


@dataclass_json
@dataclass
class PaginationOptions:
    completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completed' }})
    item_type: Optional[PaginationOptionsItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemType' }})
    max_rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxRating' }})
    order: Optional[PaginationOptionsOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'order' }})
    order_by: Optional[PaginationOptionsOrderByEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orderBy' }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageSize' }})
    
