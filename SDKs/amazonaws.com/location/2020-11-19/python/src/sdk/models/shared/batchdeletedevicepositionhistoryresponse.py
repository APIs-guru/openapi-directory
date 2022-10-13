from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json
from . import batchdeletedevicepositionhistoryerror


@dataclass_json
@dataclass
class BatchDeleteDevicePositionHistoryResponse:
    errors: List[batchdeletedevicepositionhistoryerror.BatchDeleteDevicePositionHistoryError] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Errors' }})
    
