from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import importjobsummary


@dataclass_json
@dataclass
class ListImportJobsResponse:
    import_jobs: Optional[List[importjobsummary.ImportJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImportJobs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
