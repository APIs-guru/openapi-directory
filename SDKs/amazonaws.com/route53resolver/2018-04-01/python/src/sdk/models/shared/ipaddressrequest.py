from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class IPAddressRequest:
    r"""IPAddressRequest
    In a <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_CreateResolverEndpoint.html\">CreateResolverEndpoint</a> request, the IP address that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). <code>IpAddressRequest</code> also includes the ID of the subnet that contains the IP address.
    """
    
    subnet_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ip') }})
    
