from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchevaluategeofenceserror


@dataclass_json
@dataclass
class BatchEvaluateGeofencesResponse:
    errors: List[batchevaluategeofenceserror.BatchEvaluateGeofencesError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    
