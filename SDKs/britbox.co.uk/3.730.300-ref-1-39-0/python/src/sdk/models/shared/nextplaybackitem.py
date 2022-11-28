from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NextPlaybackItemSuggestionTypeEnum(str, Enum):
    START_WATCHING = "StartWatching"
    CONTINUE_WATCHING = "ContinueWatching"
    RESTART_WATCHING = "RestartWatching"
    SEQUENTIAL = "Sequential"
    NONE = "None"


@dataclass_json
@dataclass
class NextPlaybackItem:
    source_item_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceItemId') }})
    first_watched_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstWatchedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_watched_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastWatchedDate'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    next: Optional[ItemDetail] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('next') }})
    suggestion_type: Optional[NextPlaybackItemSuggestionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('suggestionType') }})
    
