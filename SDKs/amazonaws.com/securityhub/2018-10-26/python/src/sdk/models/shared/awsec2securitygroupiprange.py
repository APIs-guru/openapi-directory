from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEc2SecurityGroupIPRange:
    r"""AwsEc2SecurityGroupIPRange
    A range of IPv4 addresses.
    """
    
    cidr_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CidrIp') }})
    
