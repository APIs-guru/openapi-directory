from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchPutGeofenceError:
    r"""BatchPutGeofenceError
    Contains error details for each geofence that failed to be stored in a given geofence collection.
    """
    
    error: BatchItemError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    geofence_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeofenceId') }})
    
