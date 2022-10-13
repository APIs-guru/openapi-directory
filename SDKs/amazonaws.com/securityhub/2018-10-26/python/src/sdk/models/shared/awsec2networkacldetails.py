from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsec2networkaclassociation
from . import awsec2networkaclentry


@dataclass_json
@dataclass
class AwsEc2NetworkACLDetails:
    associations: Optional[List[awsec2networkaclassociation.AwsEc2NetworkACLAssociation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Associations' }})
    entries: Optional[List[awsec2networkaclentry.AwsEc2NetworkACLEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IsDefault' }})
    network_acl_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NetworkAclId' }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OwnerId' }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VpcId' }})
    
