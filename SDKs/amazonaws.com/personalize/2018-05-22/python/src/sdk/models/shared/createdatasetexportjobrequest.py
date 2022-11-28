from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDatasetExportJobRequest:
    dataset_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetArn') }})
    job_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobName') }})
    job_output: DatasetExportJobOutput = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobOutput') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('roleArn') }})
    ingestion_mode: Optional[IngestionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ingestionMode') }})
    
