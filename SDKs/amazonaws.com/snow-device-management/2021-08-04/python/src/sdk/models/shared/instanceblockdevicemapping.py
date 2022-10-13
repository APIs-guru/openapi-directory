from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import ebsinstanceblockdevice


@dataclass_json
@dataclass
class InstanceBlockDeviceMapping:
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceName' }})
    ebs: Optional[ebsinstanceblockdevice.EbsInstanceBlockDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ebs' }})
    
