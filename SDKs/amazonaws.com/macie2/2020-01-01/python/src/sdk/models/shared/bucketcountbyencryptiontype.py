from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BucketCountByEncryptionType:
    r"""BucketCountByEncryptionType
    Provides information about the number of S3 buckets that use certain types of server-side encryption by default or don't encrypt new objects by default. For detailed information about these settings, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html\">Setting default server-side encryption behavior for Amazon S3 buckets</a> in the <i>Amazon Simple Storage Service User Guide</i>.
    """
    
    kms_managed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsManaged') }})
    s3_managed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('s3Managed') }})
    unencrypted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unencrypted') }})
    unknown: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('unknown') }})
    
