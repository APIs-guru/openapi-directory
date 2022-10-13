from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awss3bucketnotificationconfigurationdetail


@dataclass_json
@dataclass
class AwsS3BucketNotificationConfiguration:
    configurations: Optional[List[awss3bucketnotificationconfigurationdetail.AwsS3BucketNotificationConfigurationDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configurations' }})
    
