from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketNotificationConfigurationFilter:
    r"""AwsS3BucketNotificationConfigurationFilter
    Filtering information for the notifications. The filtering is based on Amazon S3 key names.
    """
    
    s3_key_filter: Optional[AwsS3BucketNotificationConfigurationS3KeyFilter] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3KeyFilter') }})
    
