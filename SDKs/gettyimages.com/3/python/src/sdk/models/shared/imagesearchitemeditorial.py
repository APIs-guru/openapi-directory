from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alloweduse
from . import imagesearchitemdisplaysize
from . import editorialsource
from . import keyword
from . import download
from . import maxdimensions
from . import referraldestination


@dataclass_json
@dataclass
class ImageSearchItemEditorial:
    allowed_use: Optional[alloweduse.AllowedUse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_use' }})
    alternative_ids: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alternative_ids' }})
    artist: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artist' }})
    asset_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_family' }})
    call_for_image: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'call_for_image' }})
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    collection_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection_code' }})
    collection_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection_id' }})
    collection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection_name' }})
    color_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color_type' }})
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    date_camera_shot: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_camera_shot', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_sizes: Optional[List[imagesearchitemdisplaysize.ImageSearchItemDisplaySize]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_sizes' }})
    download_product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_product' }})
    editorial_segments: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editorial_segments' }})
    editorial_source: Optional[editorialsource.EditorialSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'editorial_source' }})
    event_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_ids' }})
    graphical_style: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'graphical_style' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    keywords: Optional[List[keyword.Keyword]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywords' }})
    largest_downloads: Optional[List[download.Download]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'largest_downloads' }})
    license_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license_model' }})
    max_dimensions: Optional[maxdimensions.MaxDimensions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_dimensions' }})
    orientation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orientation' }})
    people: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'people' }})
    product_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_types' }})
    quality_rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'quality_rank' }})
    referral_destinations: Optional[List[referraldestination.ReferralDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referral_destinations' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    uri_oembed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'uri_oembed' }})
    
