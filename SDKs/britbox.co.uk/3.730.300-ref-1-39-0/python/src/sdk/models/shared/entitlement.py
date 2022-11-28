from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    delivery_type: EntitlementDeliveryTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('deliveryType') }})
    ownership: EntitlementOwnershipEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownership') }})
    resolution: EntitlementResolutionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    scopes: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('scopes') }})
    activation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    classification: Optional[ClassificationSummary] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('classification') }})
    creation_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('creationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    exclusion_rules: Optional[List[ExclusionRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exclusionRules') }})
    expiration_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expirationDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    item_type: Optional[EntitlementItemTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemType') }})
    max_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxDownloads') }})
    max_plays: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxPlays') }})
    media_duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mediaDuration') }})
    plan_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('planId') }})
    play_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playCount') }})
    play_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('playPeriod') }})
    remaining_downloads: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('remainingDownloads') }})
    rental_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rentalPeriod') }})
    
