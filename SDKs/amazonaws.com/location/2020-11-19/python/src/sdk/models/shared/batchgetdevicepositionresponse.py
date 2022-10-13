from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import deviceposition
from . import batchgetdevicepositionerror


@dataclass_json
@dataclass
class BatchGetDevicePositionResponse:
    device_positions: List[deviceposition.DevicePosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DevicePositions' }})
    errors: List[batchgetdevicepositionerror.BatchGetDevicePositionError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    
