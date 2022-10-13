from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DevicePositionUpdate:
    device_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceId' }})
    position: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Position' }})
    sample_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampleTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
