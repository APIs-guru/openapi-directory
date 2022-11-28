from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DevicePosition:
    r"""DevicePosition
    Contains the device position details.
    """
    
    position: List[float] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('Position') }})
    received_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReceivedTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    sample_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SampleTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceId') }})
    
