from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEc2NetworkInterfaceDetails:
    r"""AwsEc2NetworkInterfaceDetails
    Details about the network interface
    """
    
    attachment: Optional[AwsEc2NetworkInterfaceAttachment] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Attachment') }})
    ip_v6_addresses: Optional[List[AwsEc2NetworkInterfaceIPV6AddressDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpV6Addresses') }})
    network_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkInterfaceId') }})
    private_ip_addresses: Optional[List[AwsEc2NetworkInterfacePrivateIPAddressDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PrivateIpAddresses') }})
    public_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicDnsName') }})
    public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PublicIp') }})
    security_groups: Optional[List[AwsEc2NetworkInterfaceSecurityGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    source_dest_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SourceDestCheck') }})
    
