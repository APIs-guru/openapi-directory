from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awss3bucketbucketlifecycleconfigurationrulesdetails


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationDetails:
    rules: Optional[List[awss3bucketbucketlifecycleconfigurationrulesdetails.AwsS3BucketBucketLifecycleConfigurationRulesDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Rules' }})
    
