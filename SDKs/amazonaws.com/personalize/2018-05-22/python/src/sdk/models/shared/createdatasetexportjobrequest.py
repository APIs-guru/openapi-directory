from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ingestionmode_enum
from . import datasetexportjoboutput


@dataclass_json
@dataclass
class CreateDatasetExportJobRequest:
    dataset_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetArn' }})
    ingestion_mode: Optional[ingestionmode_enum.IngestionModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ingestionMode' }})
    job_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobName' }})
    job_output: datasetexportjoboutput.DatasetExportJobOutput = field(default=None, metadata={'dataclasses_json': { 'field_name': 'jobOutput' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roleArn' }})
    
