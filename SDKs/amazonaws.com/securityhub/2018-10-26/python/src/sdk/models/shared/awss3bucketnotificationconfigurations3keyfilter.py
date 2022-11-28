from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketNotificationConfigurationS3KeyFilter:
    r"""AwsS3BucketNotificationConfigurationS3KeyFilter
    Details for an Amazon S3 filter.
    """
    
    filter_rules: Optional[List[AwsS3BucketNotificationConfigurationS3KeyFilterRule]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FilterRules') }})
    
