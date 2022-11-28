from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListGeofenceResponseEntry:
    r"""ListGeofenceResponseEntry
    Contains a list of geofences stored in a given geofence collection.
    """
    
    create_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    geofence_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeofenceId') }})
    geometry: GeofenceGeometry = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    status: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    update_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('UpdateTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
