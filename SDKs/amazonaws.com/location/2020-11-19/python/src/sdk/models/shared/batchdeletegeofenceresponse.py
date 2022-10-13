from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchdeletegeofenceerror


@dataclass_json
@dataclass
class BatchDeleteGeofenceResponse:
    errors: List[batchdeletegeofenceerror.BatchDeleteGeofenceError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    
