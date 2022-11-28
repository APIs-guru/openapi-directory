from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDeviceOutput:
    associated_with_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('associatedWithJob') }})
    device_capacities: Optional[List[Capacity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceCapacities') }})
    device_state: Optional[UnlockStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceState') }})
    device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceType') }})
    last_reached_out_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastReachedOutAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdatedAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    managed_device_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedDeviceArn') }})
    managed_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('managedDeviceId') }})
    physical_network_interfaces: Optional[List[PhysicalNetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('physicalNetworkInterfaces') }})
    software: Optional[SoftwareInformation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('software') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    
