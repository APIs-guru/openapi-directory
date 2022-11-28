from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchDeleteGeofenceError:
    r"""BatchDeleteGeofenceError
    Contains error details for each geofence that failed to delete from the geofence collection.
    """
    
    error: BatchItemError = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Error') }})
    geofence_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('GeofenceId') }})
    
