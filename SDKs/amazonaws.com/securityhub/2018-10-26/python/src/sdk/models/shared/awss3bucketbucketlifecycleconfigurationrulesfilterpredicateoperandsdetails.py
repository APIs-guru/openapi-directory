from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandstagdetails


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails:
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Prefix' }})
    tag: Optional[awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandstagdetails.AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsTagDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tag' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
