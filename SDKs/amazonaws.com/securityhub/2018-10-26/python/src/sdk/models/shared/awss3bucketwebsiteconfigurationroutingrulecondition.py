from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsS3BucketWebsiteConfigurationRoutingRuleCondition:
    r"""AwsS3BucketWebsiteConfigurationRoutingRuleCondition
    The condition that must be met in order to apply the routing rule.
    """
    
    http_error_code_returned_equals: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpErrorCodeReturnedEquals') }})
    key_prefix_equals: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyPrefixEquals') }})
    
