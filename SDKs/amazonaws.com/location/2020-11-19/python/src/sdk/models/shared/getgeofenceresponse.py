from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import geofencegeometry


@dataclass_json
@dataclass
class GetGeofenceResponse:
    create_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    geofence_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeofenceId' }})
    geometry: geofencegeometry.GeofenceGeometry = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Geometry' }})
    status: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    update_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UpdateTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
