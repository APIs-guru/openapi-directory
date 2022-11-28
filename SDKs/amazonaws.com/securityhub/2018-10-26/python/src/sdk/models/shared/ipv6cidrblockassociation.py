from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class Ipv6CidrBlockAssociation:
    r"""Ipv6CidrBlockAssociation
    An IPV6 CIDR block association.
    """
    
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociationId') }})
    cidr_block_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CidrBlockState') }})
    ipv6_cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ipv6CidrBlock') }})
    
