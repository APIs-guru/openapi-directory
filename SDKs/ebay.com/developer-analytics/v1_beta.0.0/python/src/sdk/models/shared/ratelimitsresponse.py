from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import ratelimit


@dataclass_json
@dataclass
class RateLimitsResponse:
    rate_limits: Optional[List[ratelimit.RateLimit]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rateLimits' }})
    
