from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEc2VpcDetails:
    r"""AwsEc2VpcDetails
    Details about an EC2 VPC.
    """
    
    cidr_block_association_set: Optional[List[CidrBlockAssociation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CidrBlockAssociationSet') }})
    dhcp_options_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DhcpOptionsId') }})
    ipv6_cidr_block_association_set: Optional[List[Ipv6CidrBlockAssociation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ipv6CidrBlockAssociationSet') }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('State') }})
    
