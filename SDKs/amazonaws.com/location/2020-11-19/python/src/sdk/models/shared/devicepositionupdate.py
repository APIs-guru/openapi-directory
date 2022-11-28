from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DevicePositionUpdate:
    r"""DevicePositionUpdate
    Contains the position update details for a device.
    """
    
    device_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceId') }})
    position: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Position') }})
    sample_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
