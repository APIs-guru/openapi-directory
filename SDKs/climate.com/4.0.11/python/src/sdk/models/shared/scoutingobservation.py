from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List
from dataclasses_json import dataclass_json
from . import scoutingtag

class ScoutingObservationLocationDisplayColorEnum(str, Enum):
    NUMBER_307AF7 = "#307af7"
    NUMBER_38D753 = "#38d753"
    NUMBER_B037E4 = "#b037e4"
    NUMBER_EF3E3E = "#ef3e3e"
    NUMBER_F7EC41 = "#f7ec41"
    NUMBER_FF8439 = "#ff8439"
    NUMBER_808080 = "#808080"

class ScoutingObservationStatusEnum(str, Enum):
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"

class ScoutingObservationTimespanEnum(str, Enum):
    PERMANENT = "PERMANENT"
    SEASONAL = "SEASONAL"


@dataclass_json
@dataclass
class ScoutingObservation:
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    field_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldIds' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    location: Any = field(default=None, metadata={'dataclasses_json': { 'field_name': 'location' }})
    location_display_color: ScoutingObservationLocationDisplayColorEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationDisplayColor' }})
    note: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'note' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    status: ScoutingObservationStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    tags: List[scoutingtag.ScoutingTag] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    timespan: ScoutingObservationTimespanEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timespan' }})
    title: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    updated_at: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
