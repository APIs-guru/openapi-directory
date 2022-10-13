from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsEc2NetworkACLAssociation:
    network_acl_association_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkAclAssociationId' }})
    network_acl_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkAclId' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    
