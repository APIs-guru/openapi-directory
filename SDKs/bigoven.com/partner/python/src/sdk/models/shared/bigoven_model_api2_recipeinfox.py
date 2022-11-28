from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BigOvenModelApi2RecipeInfox:
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cuisine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cuisine') }})
    has_videos: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasVideos') }})
    is_bookmark: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsBookmark') }})
    is_private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPrivate') }})
    is_recipe_scan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsRecipeScan') }})
    microcategory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Microcategory') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhotoUrl') }})
    poster: Optional[BigOvenModelApi2UserInfoTinyx] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Poster') }})
    recipe_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecipeID') }})
    review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewCount') }})
    servings: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Servings') }})
    star_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StarRating') }})
    subcategory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subcategory') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    total_tries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalTries') }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebURL') }})
    
