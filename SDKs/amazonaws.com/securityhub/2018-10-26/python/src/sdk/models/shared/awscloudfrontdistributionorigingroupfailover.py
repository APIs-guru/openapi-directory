from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsCloudFrontDistributionOriginGroupFailover:
    r"""AwsCloudFrontDistributionOriginGroupFailover
    Provides information about when an origin group fails over.
    """
    
    status_codes: Optional[AwsCloudFrontDistributionOriginGroupFailoverStatusCodes] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('StatusCodes') }})
    
