from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import quotastatus
from . import quotastatus
from . import quotastatus
from . import quotastatus
from . import quotastatus
from . import quotastatus


@dataclass_json
@dataclass
class PropertyQuota:
    concurrent_requests: Optional[quotastatus.QuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrentRequests' }})
    potentially_thresholded_requests_per_hour: Optional[quotastatus.QuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'potentiallyThresholdedRequestsPerHour' }})
    server_errors_per_project_per_hour: Optional[quotastatus.QuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serverErrorsPerProjectPerHour' }})
    tokens_per_day: Optional[quotastatus.QuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokensPerDay' }})
    tokens_per_hour: Optional[quotastatus.QuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokensPerHour' }})
    tokens_per_project_per_hour: Optional[quotastatus.QuotaStatus] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tokensPerProjectPerHour' }})
    
