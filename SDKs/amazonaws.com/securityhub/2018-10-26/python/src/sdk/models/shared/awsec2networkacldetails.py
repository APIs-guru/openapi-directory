from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsEc2NetworkACLDetails:
    r"""AwsEc2NetworkACLDetails
    Contains details about an EC2 network access control list (ACL).
    """
    
    associations: Optional[List[AwsEc2NetworkACLAssociation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Associations') }})
    entries: Optional[List[AwsEc2NetworkACLEntry]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Entries') }})
    is_default: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IsDefault') }})
    network_acl_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NetworkAclId') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('OwnerId') }})
    vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VpcId') }})
    
