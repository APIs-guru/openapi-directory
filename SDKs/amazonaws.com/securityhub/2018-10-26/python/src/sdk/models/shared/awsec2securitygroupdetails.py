from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsec2securitygroupippermission
from . import awsec2securitygroupippermission


@dataclass_json
@dataclass
class AwsEc2SecurityGroupDetails:
    group_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupId' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    ip_permissions: Optional[List[awsec2securitygroupippermission.AwsEc2SecurityGroupIPPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpPermissions' }})
    ip_permissions_egress: Optional[List[awsec2securitygroupippermission.AwsEc2SecurityGroupIPPermission]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpPermissionsEgress' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
