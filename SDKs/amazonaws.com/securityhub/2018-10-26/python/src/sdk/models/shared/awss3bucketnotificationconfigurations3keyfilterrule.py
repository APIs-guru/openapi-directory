from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import awss3bucketnotificationconfigurations3keyfilterrulename_enum


@dataclass_json
@dataclass
class AwsS3BucketNotificationConfigurationS3KeyFilterRule:
    name: Optional[awss3bucketnotificationconfigurations3keyfilterrulename_enum.AwsS3BucketNotificationConfigurationS3KeyFilterRuleNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
