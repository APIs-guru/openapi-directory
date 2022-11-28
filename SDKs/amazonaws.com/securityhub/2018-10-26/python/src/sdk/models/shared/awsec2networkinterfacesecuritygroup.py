from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEc2NetworkInterfaceSecurityGroup:
    r"""AwsEc2NetworkInterfaceSecurityGroup
    A security group associated with the network interface.
    """
    
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    
