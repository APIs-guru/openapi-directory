from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awss3bucketbucketlifecycleconfigurationrulesfilterpredicatedetails


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesFilterDetails:
    predicate: Optional[awss3bucketbucketlifecycleconfigurationrulesfilterpredicatedetails.AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Predicate' }})
    
