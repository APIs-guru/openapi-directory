from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEc2SecurityGroupIpv6Range:
    r"""AwsEc2SecurityGroupIpv6Range
    A range of IPv6 addresses.
    """
    
    cidr_ipv6: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CidrIpv6') }})
    
