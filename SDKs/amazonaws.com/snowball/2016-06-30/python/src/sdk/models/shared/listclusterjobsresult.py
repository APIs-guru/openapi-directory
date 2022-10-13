from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import joblistentry


@dataclass_json
@dataclass
class ListClusterJobsResult:
    job_list_entries: Optional[List[joblistentry.JobListEntry]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobListEntries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
