from dataclasses import dataclass, field
from typing import Optional


@dataclass
class JobsFilter:
    job_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'job_id' }})
    
