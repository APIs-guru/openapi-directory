from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsCloudFrontDistributionOrigins:
    r"""AwsCloudFrontDistributionOrigins
    A complex type that contains information about origins and origin groups for this distribution.
    """
    
    items: Optional[List[AwsCloudFrontDistributionOriginItem]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Items') }})
    
