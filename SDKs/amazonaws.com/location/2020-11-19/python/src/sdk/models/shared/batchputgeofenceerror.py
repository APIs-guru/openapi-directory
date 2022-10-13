from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import batchitemerror


@dataclass_json
@dataclass
class BatchPutGeofenceError:
    error: batchitemerror.BatchItemError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    geofence_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GeofenceId' }})
    
