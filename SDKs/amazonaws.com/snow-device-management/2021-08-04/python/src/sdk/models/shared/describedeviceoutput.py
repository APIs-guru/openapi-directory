from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import capacity
from . import unlockstate_enum
from . import physicalnetworkinterface
from . import softwareinformation


@dataclass_json
@dataclass
class DescribeDeviceOutput:
    associated_with_job: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'associatedWithJob' }})
    device_capacities: Optional[List[capacity.Capacity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceCapacities' }})
    device_state: Optional[unlockstate_enum.UnlockStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceState' }})
    device_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceType' }})
    last_reached_out_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastReachedOutAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    managed_device_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedDeviceArn' }})
    managed_device_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'managedDeviceId' }})
    physical_network_interfaces: Optional[List[physicalnetworkinterface.PhysicalNetworkInterface]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'physicalNetworkInterfaces' }})
    software: Optional[softwareinformation.SoftwareInformation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'software' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
