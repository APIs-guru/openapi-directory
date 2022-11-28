from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    completed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completed') }})
    item_type: Optional[PaginationOptionsItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemType') }})
    max_rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRating') }})
    order: Optional[PaginationOptionsOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('order') }})
    order_by: Optional[PaginationOptionsOrderByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    page_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageSize') }})
    
