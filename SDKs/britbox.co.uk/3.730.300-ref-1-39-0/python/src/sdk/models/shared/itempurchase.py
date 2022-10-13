from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json

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
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    ownership: ItemPurchaseOwnershipEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownership' }})
    resolution: ItemPurchaseResolutionEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resolution' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: ItemPurchaseTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
