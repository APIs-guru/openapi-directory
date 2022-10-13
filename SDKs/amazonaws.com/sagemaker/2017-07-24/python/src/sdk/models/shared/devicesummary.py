from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import edgemodelsummary


@dataclass_json
@dataclass
class DeviceSummary:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    device_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceArn' }})
    device_fleet_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceFleetName' }})
    device_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceName' }})
    iot_thing_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IotThingName' }})
    latest_heartbeat: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestHeartbeat', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    models: Optional[List[edgemodelsummary.EdgeModelSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Models' }})
    registration_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RegistrationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
