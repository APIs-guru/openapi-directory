from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import alloweduse
from . import videosearchitemdisplaysize
from . import istocklicense
from . import keyword
from . import download
from . import referraldestination


@dataclass_json
@dataclass
class CreativeVideoSearchItem:
    allowed_use: Optional[alloweduse.AllowedUse] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_use' }})
    artist: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'artist' }})
    asset_family: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_family' }})
    caption: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'caption' }})
    clip_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clip_length' }})
    collection_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection_code' }})
    collection_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection_id' }})
    collection_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'collection_name' }})
    color_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color_type' }})
    copyright: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'copyright' }})
    date_created: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date_created', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    display_sizes: Optional[List[videosearchitemdisplaysize.VideoSearchItemDisplaySize]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_sizes' }})
    download_product: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'download_product' }})
    era: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'era' }})
    event_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'event_ids' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    istock_licenses: Optional[List[istocklicense.IStockLicense]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'istock_licenses' }})
    keywords: Optional[List[keyword.Keyword]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keywords' }})
    largest_downloads: Optional[List[download.Download]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'largest_downloads' }})
    license_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'license_model' }})
    mastered_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mastered_to' }})
    originally_shot_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'originally_shot_on' }})
    product_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'product_types' }})
    referral_destinations: Optional[List[referraldestination.ReferralDestination]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'referral_destinations' }})
    shot_speed: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shot_speed' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
