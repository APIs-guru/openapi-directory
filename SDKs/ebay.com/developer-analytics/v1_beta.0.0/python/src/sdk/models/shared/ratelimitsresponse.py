from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class RateLimitsResponse:
    r"""RateLimitsResponse
    This complex type defines a list of rate-limit data as it pertains to a method within the specified version of an API.
    """
    
    rate_limits: Optional[List[RateLimit]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rateLimits') }})
    
