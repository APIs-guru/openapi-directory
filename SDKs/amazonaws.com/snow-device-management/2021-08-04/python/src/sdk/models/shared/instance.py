from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instanceblockdevicemapping
from . import cpuoptions
from . import securitygroupidentifier
from . import instancestate


@dataclass_json
@dataclass
class Instance:
    ami_launch_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'amiLaunchIndex' }})
    block_device_mappings: Optional[List[instanceblockdevicemapping.InstanceBlockDeviceMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockDeviceMappings' }})
    cpu_options: Optional[cpuoptions.CPUOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'cpuOptions' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createdAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'imageId' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceId' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceType' }})
    private_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'privateIpAddress' }})
    public_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publicIpAddress' }})
    root_device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rootDeviceName' }})
    security_groups: Optional[List[securitygroupidentifier.SecurityGroupIdentifier]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityGroups' }})
    state: Optional[instancestate.InstanceState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updatedAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
