from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Watched:
    first_watched_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstWatchedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    is_fully_watched: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFullyWatched' }})
    item_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'itemId' }})
    last_watched_date: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastWatchedDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    position: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    
