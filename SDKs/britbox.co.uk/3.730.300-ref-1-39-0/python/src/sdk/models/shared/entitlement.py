from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import classificationsummary
from . import exclusionrule

class EntitlementDeliveryTypeEnum(str, Enum):
    STREAM = "Stream"
    DOWNLOAD = "Download"
    STREAM_OR_DOWNLOAD = "StreamOrDownload"
    PROGRESSIVE_DOWNLOAD = "ProgressiveDownload"
    NONE = "None"

class EntitlementItemTypeEnum(str, Enum):
    MOVIE = "movie"
    SHOW = "show"
    SEASON = "season"
    EPISODE = "episode"
    PROGRAM = "program"
    LINK = "link"
    TRAILER = "trailer"
    CHANNEL = "channel"
    CUSTOM_ASSET = "customAsset"

class EntitlementOwnershipEnum(str, Enum):
    SUBSCRIPTION = "Subscription"
    FREE = "Free"
    RENT = "Rent"
    OWN = "Own"
    NONE = "None"

class EntitlementResolutionEnum(str, Enum):
    SD = "SD"
    HD_720 = "HD-720"
    HD_1080 = "HD-1080"
    HD_4_K = "HD-4K"
    EXTERNAL = "External"
    UNKNOWN = "Unknown"


@dataclass_json
@dataclass
class Entitlement:
    activation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'activationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    classification: Optional[classificationsummary.ClassificationSummary] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'creationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    delivery_type: EntitlementDeliveryTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryType' }})
    exclusion_rules: Optional[List[exclusionrule.ExclusionRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusionRules' }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expirationDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    item_type: Optional[EntitlementItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemType' }})
    max_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDownloads' }})
    max_plays: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPlays' }})
    media_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mediaDuration' }})
    ownership: EntitlementOwnershipEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownership' }})
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'planId' }})
    play_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playCount' }})
    play_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playPeriod' }})
    remaining_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'remainingDownloads' }})
    rental_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rentalPeriod' }})
    resolution: EntitlementResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    scopes: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    
