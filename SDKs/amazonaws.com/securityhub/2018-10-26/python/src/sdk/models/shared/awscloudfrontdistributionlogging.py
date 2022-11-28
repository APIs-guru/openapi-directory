from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class AwsCloudFrontDistributionLogging:
    r"""AwsCloudFrontDistributionLogging
    A complex type that controls whether access logs are written for the distribution.
    """
    
    bucket: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Bucket') }})
    enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Enabled') }})
    include_cookies: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IncludeCookies') }})
    prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Prefix') }})
    
