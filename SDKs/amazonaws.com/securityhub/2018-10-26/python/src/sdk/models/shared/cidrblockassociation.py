from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CidrBlockAssociation:
    association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociationId' }})
    cidr_block: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CidrBlock' }})
    cidr_block_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CidrBlockState' }})
    
