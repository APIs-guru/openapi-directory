from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import dataingestionjobsummary


@dataclass_json
@dataclass
class ListDataIngestionJobsResponse:
    data_ingestion_job_summaries: Optional[List[dataingestionjobsummary.DataIngestionJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataIngestionJobSummaries' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    
