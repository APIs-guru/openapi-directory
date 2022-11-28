from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AccessControlList:
    r"""AccessControlList
    Provides information about the permissions settings of the bucket-level access control list (ACL) for an S3 bucket.
    """
    
    allows_public_read_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsPublicReadAccess') }})
    allows_public_write_access: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowsPublicWriteAccess') }})
    
