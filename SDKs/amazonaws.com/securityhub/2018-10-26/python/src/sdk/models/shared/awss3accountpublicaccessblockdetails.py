from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsS3AccountPublicAccessBlockDetails:
    r"""AwsS3AccountPublicAccessBlockDetails
    provides information about the Amazon S3 Public Access Block configuration for accounts.
    """
    
    block_public_acls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockPublicAcls') }})
    block_public_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockPublicPolicy') }})
    ignore_public_acls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IgnorePublicAcls') }})
    restrict_public_buckets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RestrictPublicBuckets') }})
    
