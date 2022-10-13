from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awss3bucketnotificationconfigurations3keyfilter


@dataclass_json
@dataclass
class AwsS3BucketNotificationConfigurationFilter:
    s3_key_filter: Optional[awss3bucketnotificationconfigurations3keyfilter.AwsS3BucketNotificationConfigurationS3KeyFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3KeyFilter' }})
    
