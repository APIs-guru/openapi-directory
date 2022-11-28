from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Watched:
    first_watched_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstWatchedDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_watched_date: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastWatchedDate'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    position: int = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('position') }})
    is_fully_watched: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFullyWatched') }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('itemId') }})
    
