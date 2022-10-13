from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UtteranceData:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    distinct_users: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'distinctUsers' }})
    first_uttered_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstUtteredDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_uttered_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUtteredDate', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    utterance_string: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'utteranceString' }})
    
