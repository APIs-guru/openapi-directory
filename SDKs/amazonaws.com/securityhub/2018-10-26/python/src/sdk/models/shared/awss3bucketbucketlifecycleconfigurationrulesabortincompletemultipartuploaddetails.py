from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails:
    r"""AwsS3BucketBucketLifecycleConfigurationRulesAbortIncompleteMultipartUploadDetails
    Information about what Amazon S3 does when a multipart upload is incomplete.
    """
    
    days_after_initiation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DaysAfterInitiation') }})
    
