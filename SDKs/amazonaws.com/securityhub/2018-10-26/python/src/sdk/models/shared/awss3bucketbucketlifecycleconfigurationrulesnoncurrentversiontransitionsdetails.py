from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesNoncurrentVersionTransitionsDetails:
    days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Days' }})
    storage_class: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StorageClass' }})
    
