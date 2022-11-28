from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    availability: OfferAvailabilityEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('availability') }})
    delivery_type: OfferDeliveryTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryType') }})
    ownership: OfferOwnershipEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownership') }})
    price: float = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('price') }})
    resolution: OfferResolutionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    scopes: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    custom_fields: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('customFields') }})
    end_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    exclusion_rules: Optional[List[ExclusionRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionRules') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    max_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDownloads') }})
    max_plays: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPlays') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    play_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playPeriod') }})
    rental_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rentalPeriod') }})
    start_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    subscription_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscriptionCode') }})
    
