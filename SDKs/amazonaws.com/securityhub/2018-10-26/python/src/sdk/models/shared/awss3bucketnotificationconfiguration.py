from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketNotificationConfiguration:
    r"""AwsS3BucketNotificationConfiguration
    The notification configuration for the S3 bucket.
    """
    
    configurations: Optional[List[AwsS3BucketNotificationConfigurationDetail]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Configurations') }})
    
