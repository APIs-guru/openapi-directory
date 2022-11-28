from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BucketServerSideEncryption:
    r"""BucketServerSideEncryption
    Provides information about the default server-side encryption settings for an S3 bucket. For detailed information about these settings, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html\">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.
    """
    
    kms_master_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsMasterKeyId') }})
    type: Optional[TypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
