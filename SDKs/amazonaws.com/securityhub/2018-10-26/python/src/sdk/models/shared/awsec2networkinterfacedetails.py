from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsec2networkinterfaceattachment
from . import awsec2networkinterfaceipv6addressdetail
from . import awsec2networkinterfaceprivateipaddressdetail
from . import awsec2networkinterfacesecuritygroup


@dataclass_json
@dataclass
class AwsEc2NetworkInterfaceDetails:
    attachment: Optional[awsec2networkinterfaceattachment.AwsEc2NetworkInterfaceAttachment] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Attachment' }})
    ip_v6_addresses: Optional[List[awsec2networkinterfaceipv6addressdetail.AwsEc2NetworkInterfaceIPV6AddressDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IpV6Addresses' }})
    network_interface_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkInterfaceId' }})
    private_ip_addresses: Optional[List[awsec2networkinterfaceprivateipaddressdetail.AwsEc2NetworkInterfacePrivateIPAddressDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PrivateIpAddresses' }})
    public_dns_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicDnsName' }})
    public_ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PublicIp' }})
    security_groups: Optional[List[awsec2networkinterfacesecuritygroup.AwsEc2NetworkInterfaceSecurityGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroups' }})
    source_dest_check: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SourceDestCheck' }})
    
