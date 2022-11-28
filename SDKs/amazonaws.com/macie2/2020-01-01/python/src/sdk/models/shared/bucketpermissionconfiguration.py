from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BucketPermissionConfiguration:
    r"""BucketPermissionConfiguration
    Provides information about the account-level and bucket-level permissions settings for an S3 bucket.
    """
    
    account_level_permissions: Optional[AccountLevelPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountLevelPermissions') }})
    bucket_level_permissions: Optional[BucketLevelPermissions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bucketLevelPermissions') }})
    
