from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import datasetimportjobsummary


@dataclass_json
@dataclass
class ListDatasetImportJobsResponse:
    dataset_import_jobs: Optional[List[datasetimportjobsummary.DatasetImportJobSummary]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetImportJobs' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextToken' }})
    
