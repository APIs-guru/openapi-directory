from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsS3BucketWebsiteConfigurationRoutingRule:
    r"""AwsS3BucketWebsiteConfigurationRoutingRule
    A rule for redirecting requests to the website.
    """
    
    condition: Optional[AwsS3BucketWebsiteConfigurationRoutingRuleCondition] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Condition') }})
    redirect: Optional[AwsS3BucketWebsiteConfigurationRoutingRuleRedirect] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Redirect') }})
    
