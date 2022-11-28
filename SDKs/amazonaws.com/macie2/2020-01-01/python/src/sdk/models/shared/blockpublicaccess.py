from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BlockPublicAccess:
    r"""BlockPublicAccess
    Provides information about the block public access settings for an S3 bucket. These settings can apply to a bucket at the account level or bucket level. For detailed information about each setting, see <a href=\"https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-control-block-public-access.html\">Blocking public access to your Amazon S3 storage</a> in the <i>Amazon Simple Storage Service User Guide</i>.
    """
    
    block_public_acls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockPublicAcls') }})
    block_public_policy: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('blockPublicPolicy') }})
    ignore_public_acls: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ignorePublicAcls') }})
    restrict_public_buckets: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restrictPublicBuckets') }})
    
