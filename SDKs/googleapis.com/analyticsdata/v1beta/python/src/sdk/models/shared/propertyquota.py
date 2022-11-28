from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PropertyQuota:
    r"""PropertyQuota
    Current state of all quotas for this Analytics Property. If any quota for a property is exhausted, all requests to that property will return Resource Exhausted errors.
    """
    
    concurrent_requests: Optional[QuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrentRequests') }})
    potentially_thresholded_requests_per_hour: Optional[QuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('potentiallyThresholdedRequestsPerHour') }})
    server_errors_per_project_per_hour: Optional[QuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('serverErrorsPerProjectPerHour') }})
    tokens_per_day: Optional[QuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokensPerDay') }})
    tokens_per_hour: Optional[QuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokensPerHour') }})
    tokens_per_project_per_hour: Optional[QuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tokensPerProjectPerHour') }})
    
