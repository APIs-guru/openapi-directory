from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import batchitemerror


@dataclass_json
@dataclass
class BatchDeleteDevicePositionHistoryError:
    device_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceId' }})
    error: batchitemerror.BatchItemError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    
