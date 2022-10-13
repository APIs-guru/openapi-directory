from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2NetworkInterfaceAttachment:
    attach_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachTime' }})
    attachment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachmentId' }})
    delete_on_termination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteOnTermination' }})
    device_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceIndex' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    instance_owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceOwnerId' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
