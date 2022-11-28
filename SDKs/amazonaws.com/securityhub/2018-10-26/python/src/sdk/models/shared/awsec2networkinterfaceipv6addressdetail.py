from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEc2NetworkInterfaceIPV6AddressDetail:
    r"""AwsEc2NetworkInterfaceIPV6AddressDetail
    Provides information about an IPV6 address that is associated with the network interface.
    """
    
    ip_v6_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpV6Address') }})
    
