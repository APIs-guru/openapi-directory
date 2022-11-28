from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEc2SecurityGroupIPPermission:
    r"""AwsEc2SecurityGroupIPPermission
    An IP permission for an EC2 security group.
    """
    
    from_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FromPort') }})
    ip_protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpProtocol') }})
    ip_ranges: Optional[List[AwsEc2SecurityGroupIPRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpRanges') }})
    ipv6_ranges: Optional[List[AwsEc2SecurityGroupIpv6Range]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ipv6Ranges') }})
    prefix_list_ids: Optional[List[AwsEc2SecurityGroupPrefixListID]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrefixListIds') }})
    to_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ToPort') }})
    user_id_group_pairs: Optional[List[AwsEc2SecurityGroupUserIDGroupPair]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserIdGroupPairs') }})
    
