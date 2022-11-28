from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RequestUtilization:
    r"""RequestUtilization
    Target scaling by request utilization. Only applicable in the App Engine flexible environment.
    """
    
    target_concurrent_requests: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetConcurrentRequests') }})
    target_request_count_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetRequestCountPerSecond') }})
    
