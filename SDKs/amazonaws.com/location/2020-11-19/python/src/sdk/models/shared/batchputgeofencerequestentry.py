from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import geofencegeometry


@dataclass_json
@dataclass
class BatchPutGeofenceRequestEntry:
    geofence_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeofenceId' }})
    geometry: geofencegeometry.GeofenceGeometry = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Geometry' }})
    
