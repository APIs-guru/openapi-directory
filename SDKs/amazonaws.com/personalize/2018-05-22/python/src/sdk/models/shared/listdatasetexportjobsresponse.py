from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasetexportjobsummary


@dataclass_json
@dataclass
class ListDatasetExportJobsResponse:
    dataset_export_jobs: Optional[List[datasetexportjobsummary.DatasetExportJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetExportJobs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
