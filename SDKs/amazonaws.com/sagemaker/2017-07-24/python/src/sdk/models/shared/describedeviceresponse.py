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
class DescribeDeviceResponse:
    device_fleet_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceFleetName') }})
    device_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceName') }})
    registration_time: datetime = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RegistrationTime'), 'encoder': utils.datetimeisoformat(False), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    device_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceArn') }})
    iot_thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IotThingName') }})
    latest_heartbeat: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LatestHeartbeat'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_models: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxModels') }})
    models: Optional[List[EdgeModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Models') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    
