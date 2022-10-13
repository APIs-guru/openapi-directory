from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from . import exclusionrule

class OfferAvailabilityEnum(str, Enum):
    AVAILABLE = "Available"
    COMING_SOON = "ComingSoon"

class OfferDeliveryTypeEnum(str, Enum):
    STREAM = "Stream"
    DOWNLOAD = "Download"
    STREAM_OR_DOWNLOAD = "StreamOrDownload"
    PROGRESSIVE_DOWNLOAD = "ProgressiveDownload"
    NONE = "None"

class OfferOwnershipEnum(str, Enum):
    SUBSCRIPTION = "Subscription"
    FREE = "Free"
    RENT = "Rent"
    OWN = "Own"
    NONE = "None"

class OfferResolutionEnum(str, Enum):
    SD = "SD"
    HD_720 = "HD-720"
    HD_1080 = "HD-1080"
    HD_4_K = "HD-4K"
    EXTERNAL = "External"
    UNKNOWN = "Unknown"


@dataclass_json
@dataclass
class Offer:
    availability: OfferAvailabilityEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availability' }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'customFields' }})
    delivery_type: OfferDeliveryTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deliveryType' }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    exclusion_rules: Optional[List[exclusionrule.ExclusionRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'exclusionRules' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    max_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxDownloads' }})
    max_plays: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxPlays' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    ownership: OfferOwnershipEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownership' }})
    play_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'playPeriod' }})
    price: float = field(default=None, metadata={'dataclasses_json': { 'field_name': 'price' }})
    rental_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rentalPeriod' }})
    resolution: OfferResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    scopes: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scopes' }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subscription_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscriptionCode' }})
    
