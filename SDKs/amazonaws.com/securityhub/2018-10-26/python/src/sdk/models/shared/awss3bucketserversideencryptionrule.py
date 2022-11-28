from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketServerSideEncryptionRule:
    r"""AwsS3BucketServerSideEncryptionRule
    An encryption rule to apply to the S3 bucket.
    """
    
    apply_server_side_encryption_by_default: Optional[AwsS3BucketServerSideEncryptionByDefault] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ApplyServerSideEncryptionByDefault') }})
    
