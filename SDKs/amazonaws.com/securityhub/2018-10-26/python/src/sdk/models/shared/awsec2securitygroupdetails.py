from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEc2SecurityGroupDetails:
    r"""AwsEc2SecurityGroupDetails
    Details about an EC2 security group.
    """
    
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupId') }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('GroupName') }})
    ip_permissions: Optional[List[AwsEc2SecurityGroupIPPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpPermissions') }})
    ip_permissions_egress: Optional[List[AwsEc2SecurityGroupIPPermission]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpPermissionsEgress') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
