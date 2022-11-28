from dataclasses import dataclass, field
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ItemPurchaseOwnershipEnum(str, Enum):
    SUBSCRIPTION = "Subscription"
    FREE = "Free"
    RENT = "Rent"
    OWN = "Own"
    NONE = "None"

class ItemPurchaseResolutionEnum(str, Enum):
    SD = "SD"
    HD_720 = "HD-720"
    HD_1080 = "HD-1080"
    HD_4_K = "HD-4K"
    EXTERNAL = "External"
    UNKNOWN = "Unknown"

class ItemPurchaseTypeEnum(str, Enum):
    MOVIE = "movie"
    SHOW = "show"
    SEASON = "season"
    EPISODE = "episode"
    PROGRAM = "program"
    LINK = "link"
    TRAILER = "trailer"
    CHANNEL = "channel"
    CUSTOM_ASSET = "customAsset"


@dataclass_json
@dataclass
class ItemPurchase:
    id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    ownership: ItemPurchaseOwnershipEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownership') }})
    resolution: ItemPurchaseResolutionEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolution') }})
    title: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    type: ItemPurchaseTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
