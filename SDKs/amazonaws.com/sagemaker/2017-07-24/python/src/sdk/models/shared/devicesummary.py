from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeviceSummary:
    r"""DeviceSummary
    Summary of the device.
    """
    
    device_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceArn') }})
    device_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceName') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    device_fleet_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceFleetName') }})
    iot_thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IotThingName') }})
    latest_heartbeat: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestHeartbeat'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    models: Optional[List[EdgeModelSummary]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Models') }})
    registration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrationTime'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
