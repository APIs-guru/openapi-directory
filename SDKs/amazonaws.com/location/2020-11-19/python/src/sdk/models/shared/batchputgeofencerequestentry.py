from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchPutGeofenceRequestEntry:
    r"""BatchPutGeofenceRequestEntry
    Contains geofence geometry details. 
    """
    
    geofence_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeofenceId') }})
    geometry: GeofenceGeometry = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Geometry') }})
    
