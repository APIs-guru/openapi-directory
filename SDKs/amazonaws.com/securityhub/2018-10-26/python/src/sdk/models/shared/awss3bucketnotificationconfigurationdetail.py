from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awss3bucketnotificationconfigurationfilter


@dataclass_json
@dataclass
class AwsS3BucketNotificationConfigurationDetail:
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Destination' }})
    events: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Events' }})
    filter: Optional[awss3bucketnotificationconfigurationfilter.AwsS3BucketNotificationConfigurationFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Filter' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
