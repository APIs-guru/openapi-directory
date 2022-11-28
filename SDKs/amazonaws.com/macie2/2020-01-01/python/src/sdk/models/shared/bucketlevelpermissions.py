from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BucketLevelPermissions:
    r"""BucketLevelPermissions
    Provides information about the bucket-level permissions settings for an S3 bucket.
    """
    
    access_control_list: Optional[AccessControlList] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accessControlList') }})
    block_public_access: Optional[BlockPublicAccess] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockPublicAccess') }})
    bucket_policy: Optional[BucketPolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketPolicy') }})
    
