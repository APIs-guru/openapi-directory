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
class ImageSearchItemCreative:
    allowed_use: Optional[AllowedUse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowed_use') }})
    alternative_ids: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_ids') }})
    artist: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('artist') }})
    asset_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_family') }})
    call_for_image: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('call_for_image') }})
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('caption') }})
    collection_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection_code') }})
    collection_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection_id') }})
    collection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('collection_name') }})
    color_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('color_type') }})
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('copyright') }})
    date_camera_shot: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_camera_shot'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date_created'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_sizes: Optional[List[ImageSearchItemDisplaySize]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('display_sizes') }})
    download_product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('download_product') }})
    graphical_style: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('graphical_style') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    keywords: Optional[List[Keyword]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keywords') }})
    largest_downloads: Optional[List[Download]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('largest_downloads') }})
    license_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('license_model') }})
    max_dimensions: Optional[MaxDimensions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('max_dimensions') }})
    orientation: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orientation') }})
    quality_rank: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('quality_rank') }})
    referral_destinations: Optional[List[ReferralDestination]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('referral_destinations') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    uri_oembed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('uri_oembed') }})
    
