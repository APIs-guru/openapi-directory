from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsCloudFrontDistributionOriginGroup:
    r"""AwsCloudFrontDistributionOriginGroup
    Information about an origin group for the distribution.
    """
    
    failover_criteria: Optional[AwsCloudFrontDistributionOriginGroupFailover] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('FailoverCriteria') }})
    
