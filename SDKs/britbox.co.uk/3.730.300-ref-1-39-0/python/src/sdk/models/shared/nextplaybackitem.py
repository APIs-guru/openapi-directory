from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import itemdetail

class NextPlaybackItemSuggestionTypeEnum(str, Enum):
    START_WATCHING = "StartWatching"
    CONTINUE_WATCHING = "ContinueWatching"
    RESTART_WATCHING = "RestartWatching"
    SEQUENTIAL = "Sequential"
    NONE = "None"


@dataclass_json
@dataclass
class NextPlaybackItem:
    first_watched_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstWatchedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_watched_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastWatchedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next: Optional[itemdetail.ItemDetail] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next' }})
    source_item_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceItemId' }})
    suggestion_type: Optional[NextPlaybackItemSuggestionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'suggestionType' }})
    
