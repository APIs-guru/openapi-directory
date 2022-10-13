from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LifeCycleLastTestInitiated:
    api_call_date_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiCallDateTime' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobID' }})
    
