from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import cidrblockassociation
from . import ipv6cidrblockassociation


@dataclass_json
@dataclass
class AwsEc2VpcDetails:
    cidr_block_association_set: Optional[List[cidrblockassociation.CidrBlockAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CidrBlockAssociationSet' }})
    dhcp_options_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DhcpOptionsId' }})
    ipv6_cidr_block_association_set: Optional[List[ipv6cidrblockassociation.Ipv6CidrBlockAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ipv6CidrBlockAssociationSet' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    
