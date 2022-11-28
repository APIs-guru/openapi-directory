from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeDatasetExportJobResponse:
    dataset_export_job: Optional[DatasetExportJob] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetExportJob') }})
    
