from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchputgeofenceerror
from . import batchputgeofencesuccess


@dataclass_json
@dataclass
class BatchPutGeofenceResponse:
    errors: List[batchputgeofenceerror.BatchPutGeofenceError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    successes: List[batchputgeofencesuccess.BatchPutGeofenceSuccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Successes' }})
    
