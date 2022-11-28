from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class IPAddressResponse:
    r"""IPAddressResponse
    In the response to a <a href=\"https://docs.aws.amazon.com/Route53/latest/APIReference/API_route53resolver_GetResolverEndpoint.html\">GetResolverEndpoint</a> request, information about the IP addresses that the Resolver endpoint uses for DNS queries.
    """
    
    creation_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreationTime') }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ip') }})
    ip_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IpId') }})
    modification_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ModificationTime') }})
    status: Optional[IPAddressStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    status_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusMessage') }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    
