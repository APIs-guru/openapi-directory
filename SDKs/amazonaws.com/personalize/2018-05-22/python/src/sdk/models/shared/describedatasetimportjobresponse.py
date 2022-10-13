from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import datasetimportjob


@dataclass_json
@dataclass
class DescribeDatasetImportJobResponse:
    dataset_import_job: Optional[datasetimportjob.DatasetImportJob] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetImportJob' }})
    
