from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DevicePosition:
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceId' }})
    position: List[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Position' }})
    received_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ReceivedTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sample_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SampleTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
