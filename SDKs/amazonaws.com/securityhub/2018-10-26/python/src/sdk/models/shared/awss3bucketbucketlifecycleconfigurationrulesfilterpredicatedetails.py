from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandsdetails
from . import awss3bucketbucketlifecycleconfigurationrulesfilterpredicatetagdetails


@dataclass_json
@dataclass
class AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateDetails:
    operands: Optional[List[awss3bucketbucketlifecycleconfigurationrulesfilterpredicateoperandsdetails.AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateOperandsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Operands' }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Prefix' }})
    tag: Optional[awss3bucketbucketlifecycleconfigurationrulesfilterpredicatetagdetails.AwsS3BucketBucketLifecycleConfigurationRulesFilterPredicateTagDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tag' }})
    type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
