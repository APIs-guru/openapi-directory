from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsEc2NetworkInterfacePrivateIPAddressDetail:
    r"""AwsEc2NetworkInterfacePrivateIPAddressDetail
    Provides information about a private IPv4 address that is with the network interface.
    """
    
    private_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateDnsName') }})
    private_ip_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateIpAddress') }})
    
