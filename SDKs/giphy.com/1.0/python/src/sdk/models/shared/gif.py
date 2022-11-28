from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GifImages:
    r"""GifImages
    An object containing data for various available formats and sizes of this GIF.
    """
    
    downsized: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downsized') }})
    downsized_large: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downsized_large') }})
    downsized_medium: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downsized_medium') }})
    downsized_small: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downsized_small') }})
    downsized_still: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downsized_still') }})
    fixed_height: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_height') }})
    fixed_height_downsampled: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_height_downsampled') }})
    fixed_height_small: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_height_small') }})
    fixed_height_small_still: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_height_small_still') }})
    fixed_height_still: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_height_still') }})
    fixed_width: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_width') }})
    fixed_width_downsampled: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_width_downsampled') }})
    fixed_width_small: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_width_small') }})
    fixed_width_small_still: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_width_small_still') }})
    fixed_width_still: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fixed_width_still') }})
    looping: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('looping') }})
    original: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original') }})
    original_still: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('original_still') }})
    preview: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview') }})
    preview_gif: Optional[Image] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preview_gif') }})
    
class GifTypeEnum(str, Enum):
    GIF = "gif"


@dataclass_json
@dataclass
class Gif:
    bitly_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bitly_url') }})
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content_url') }})
    create_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('create_datetime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    embded_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embded_url') }})
    featured_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('featured_tags') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    images: Optional[GifImages] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('images') }})
    import_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('import_datetime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rating') }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('slug') }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    source_post_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_post_url') }})
    source_tld: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source_tld') }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    trending_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trending_datetime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[GifTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    update_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('update_datetime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user') }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('username') }})
    
