from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsCloudFrontDistributionOriginGroups:
    r"""AwsCloudFrontDistributionOriginGroups
    Provides information about origin groups that are associated with the distribution.
    """
    
    items: Optional[List[AwsCloudFrontDistributionOriginGroup]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    
