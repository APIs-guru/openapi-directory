from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json
from . import batchitemerror


@dataclass_json
@dataclass
class BatchUpdateDevicePositionError:
    device_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceId' }})
    error: batchitemerror.BatchItemError = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Error' }})
    sample_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampleTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
