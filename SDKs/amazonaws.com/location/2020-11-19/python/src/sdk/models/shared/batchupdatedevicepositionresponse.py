from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchupdatedevicepositionerror


@dataclass_json
@dataclass
class BatchUpdateDevicePositionResponse:
    errors: List[batchupdatedevicepositionerror.BatchUpdateDevicePositionError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    
