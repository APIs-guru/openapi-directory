from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class BillingDetails:
    billed_duration_in_milliseconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billedDurationInMilliseconds' }})
    billed_memory_used_in_mb: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billedMemoryUsedInMB' }})
    
