from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasetexportjob


@dataclass_json
@dataclass
class DescribeDatasetExportJobResponse:
    dataset_export_job: Optional[datasetexportjob.DatasetExportJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetExportJob' }})
    
