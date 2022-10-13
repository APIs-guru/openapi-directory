from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import image
from . import user


@dataclass_json
@dataclass
class GifImages:
    downsized: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downsized' }})
    downsized_large: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downsized_large' }})
    downsized_medium: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downsized_medium' }})
    downsized_small: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downsized_small' }})
    downsized_still: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'downsized_still' }})
    fixed_height: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_height' }})
    fixed_height_downsampled: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_height_downsampled' }})
    fixed_height_small: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_height_small' }})
    fixed_height_small_still: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_height_small_still' }})
    fixed_height_still: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_height_still' }})
    fixed_width: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_width' }})
    fixed_width_downsampled: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_width_downsampled' }})
    fixed_width_small: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_width_small' }})
    fixed_width_small_still: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_width_small_still' }})
    fixed_width_still: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fixed_width_still' }})
    looping: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'looping' }})
    original: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original' }})
    original_still: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'original_still' }})
    preview: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preview' }})
    preview_gif: Optional[image.Image] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preview_gif' }})
    
class GifTypeEnum(str, Enum):
    GIF = "gif"


@dataclass_json
@dataclass
class Gif:
    bitly_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bitly_url' }})
    content_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content_url' }})
    create_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'create_datetime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    embded_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embded_url' }})
    featured_tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'featured_tags' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    images: Optional[GifImages] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'images' }})
    import_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'import_datetime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    rating: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rating' }})
    slug: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    source_post_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_post_url' }})
    source_tld: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source_tld' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    trending_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trending_datetime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: Optional[GifTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_datetime: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'update_datetime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
