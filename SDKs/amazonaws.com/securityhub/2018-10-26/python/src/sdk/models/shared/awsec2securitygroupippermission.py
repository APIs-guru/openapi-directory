from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsec2securitygroupiprange
from . import awsec2securitygroupipv6range
from . import awsec2securitygroupprefixlistid
from . import awsec2securitygroupuseridgrouppair


@dataclass_json
@dataclass
class AwsEc2SecurityGroupIPPermission:
    from_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FromPort' }})
    ip_protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpProtocol' }})
    ip_ranges: Optional[List[awsec2securitygroupiprange.AwsEc2SecurityGroupIPRange]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpRanges' }})
    ipv6_ranges: Optional[List[awsec2securitygroupipv6range.AwsEc2SecurityGroupIpv6Range]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ipv6Ranges' }})
    prefix_list_ids: Optional[List[awsec2securitygroupprefixlistid.AwsEc2SecurityGroupPrefixListID]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrefixListIds' }})
    to_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ToPort' }})
    user_id_group_pairs: Optional[List[awsec2securitygroupuseridgrouppair.AwsEc2SecurityGroupUserIDGroupPair]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserIdGroupPairs' }})
    
