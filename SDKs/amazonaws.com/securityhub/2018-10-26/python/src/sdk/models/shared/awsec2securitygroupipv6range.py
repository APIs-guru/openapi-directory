from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2SecurityGroupIpv6Range:
    cidr_ipv6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CidrIpv6' }})
    
