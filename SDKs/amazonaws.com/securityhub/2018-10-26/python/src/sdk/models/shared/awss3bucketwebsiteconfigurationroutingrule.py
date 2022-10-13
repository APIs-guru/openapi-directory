from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awss3bucketwebsiteconfigurationroutingrulecondition
from . import awss3bucketwebsiteconfigurationroutingruleredirect


@dataclass_json
@dataclass
class AwsS3BucketWebsiteConfigurationRoutingRule:
    condition: Optional[awss3bucketwebsiteconfigurationroutingrulecondition.AwsS3BucketWebsiteConfigurationRoutingRuleCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Condition' }})
    redirect: Optional[awss3bucketwebsiteconfigurationroutingruleredirect.AwsS3BucketWebsiteConfigurationRoutingRuleRedirect] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Redirect' }})
    
