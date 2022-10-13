from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RequestUtilization:
    target_concurrent_requests: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetConcurrentRequests' }})
    target_request_count_per_second: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetRequestCountPerSecond' }})
    
