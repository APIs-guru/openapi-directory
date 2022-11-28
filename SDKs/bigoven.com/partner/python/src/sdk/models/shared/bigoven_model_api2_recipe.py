from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BigOvenModelApi2Recipe:
    active_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ActiveMinutes') }})
    ad_tags: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdTags') }})
    admin_boost: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AdminBoost') }})
    all_categories_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AllCategoriesText') }})
    bookmark_image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BookmarkImageURL') }})
    bookmark_site_logo: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BookmarkSiteLogo') }})
    bookmark_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BookmarkURL') }})
    category: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Category') }})
    collection: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Collection') }})
    collection_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CollectionID') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    cuisine: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Cuisine') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    favorite_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FavoriteCount') }})
    image_squares: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageSquares') }})
    image_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageURL') }})
    ingredients: Optional[List[BigOvenModelAPIIngredient]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ingredients') }})
    ingredients_text_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IngredientsTextBlock') }})
    instructions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Instructions') }})
    is_bookmark: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsBookmark') }})
    is_private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsPrivate') }})
    is_recipe_scan: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsRecipeScan') }})
    is_sponsored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsSponsored') }})
    last_modified: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LastModified'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_image_square: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxImageSquare') }})
    medal_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MedalCount') }})
    menu_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MenuCount') }})
    microcategory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Microcategory') }})
    notes_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NotesCount') }})
    nutrition_info: Optional[BigOvenModelAPINutritionInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NutritionInfo') }})
    photo_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PhotoUrl') }})
    poster: Optional[BigOvenModelAPIUserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Poster') }})
    primary_ingredient: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrimaryIngredient') }})
    recipe_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RecipeID') }})
    review_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReviewCount') }})
    star_rating: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StarRating') }})
    steps: Optional[List[BigOvenModelInstructionStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Steps') }})
    subcategory: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Subcategory') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Title') }})
    total_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('TotalMinutes') }})
    variant_of_recipe_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VariantOfRecipeID') }})
    verified_by_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerifiedByClass') }})
    verified_date_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VerifiedDateTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    web_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebURL') }})
    yield_number: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('YieldNumber') }})
    yield_unit: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('YieldUnit') }})
    
