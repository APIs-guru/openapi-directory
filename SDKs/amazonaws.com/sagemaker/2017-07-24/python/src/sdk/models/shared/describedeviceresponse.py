from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import edgemodel


@dataclass_json
@dataclass
class DescribeDeviceResponse:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    device_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceArn' }})
    device_fleet_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceFleetName' }})
    device_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceName' }})
    iot_thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IotThingName' }})
    latest_heartbeat: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestHeartbeat', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_models: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxModels' }})
    models: Optional[List[edgemodel.EdgeModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Models' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    registration_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
