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
class BigOvenModelAPIRecipeInfoInput:
    bookmark_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BookmarkURL') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cuisine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cuisine') }})
    has_videos: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HasVideos') }})
    hero_photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HeroPhotoUrl') }})
    hide_from_public_search: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HideFromPublicSearch') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageURL') }})
    image_url120: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageURL120') }})
    is_bookmark: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsBookmark') }})
    is_private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPrivate') }})
    max_image_square: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxImageSquare') }})
    microcategory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Microcategory') }})
    poster: Optional[BigOvenModelAPIUserInfoInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Poster') }})
    quality_score: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('QualityScore') }})
    recipe_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecipeID') }})
    review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewCount') }})
    star_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StarRating') }})
    star_rating_img: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StarRatingIMG') }})
    subcategory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subcategory') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    total_tries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalTries') }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebURL') }})
    yield_number: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('YieldNumber') }})
    
