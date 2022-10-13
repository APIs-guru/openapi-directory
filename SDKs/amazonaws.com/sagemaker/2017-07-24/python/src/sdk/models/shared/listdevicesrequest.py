from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListDevicesRequest:
    device_fleet_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceFleetName' }})
    latest_heartbeat_after: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LatestHeartbeatAfter', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    model_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ModelName' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
