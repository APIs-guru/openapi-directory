from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import accesscontrollist
from . import blockpublicaccess
from . import bucketpolicy


@dataclass_json
@dataclass
class BucketLevelPermissions:
    access_control_list: Optional[accesscontrollist.AccessControlList] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessControlList' }})
    block_public_access: Optional[blockpublicaccess.BlockPublicAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'blockPublicAccess' }})
    bucket_policy: Optional[bucketpolicy.BucketPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketPolicy' }})
    
