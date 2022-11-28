from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsS3BucketWebsiteConfigurationRoutingRuleRedirect:
    r"""AwsS3BucketWebsiteConfigurationRoutingRuleRedirect
    The rules to redirect the request if the condition in <code>Condition</code> is met.
    """
    
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hostname') }})
    http_redirect_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('HttpRedirectCode') }})
    protocol: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Protocol') }})
    replace_key_prefix_with: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplaceKeyPrefixWith') }})
    replace_key_with: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ReplaceKeyWith') }})
    
