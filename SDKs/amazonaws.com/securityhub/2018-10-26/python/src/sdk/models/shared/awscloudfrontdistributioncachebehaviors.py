from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsCloudFrontDistributionCacheBehaviors:
    r"""AwsCloudFrontDistributionCacheBehaviors
    Provides information about caching for the distribution.
    """
    
    items: Optional[List[AwsCloudFrontDistributionCacheBehavior]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    
