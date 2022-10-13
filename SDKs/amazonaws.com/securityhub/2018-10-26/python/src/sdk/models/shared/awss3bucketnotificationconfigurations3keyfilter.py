from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awss3bucketnotificationconfigurations3keyfilterrule


@dataclass_json
@dataclass
class AwsS3BucketNotificationConfigurationS3KeyFilter:
    filter_rules: Optional[List[awss3bucketnotificationconfigurations3keyfilterrule.AwsS3BucketNotificationConfigurationS3KeyFilterRule]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterRules' }})
    
