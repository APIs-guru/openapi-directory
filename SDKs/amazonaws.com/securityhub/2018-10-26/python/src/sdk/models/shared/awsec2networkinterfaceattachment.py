from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEc2NetworkInterfaceAttachment:
    r"""AwsEc2NetworkInterfaceAttachment
    Information about the network interface attachment.
    """
    
    attach_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachTime') }})
    attachment_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AttachmentId') }})
    delete_on_termination: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeleteOnTermination') }})
    device_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceIndex') }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceId') }})
    instance_owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceOwnerId') }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
