from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2VolumeAttachment:
    attach_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AttachTime' }})
    delete_on_termination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeleteOnTermination' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
