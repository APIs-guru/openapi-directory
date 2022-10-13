from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import ingestioninputconfiguration
from . import ingestionjobstatus_enum


@dataclass_json
@dataclass
class DataIngestionJobSummary:
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetArn' }})
    dataset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DatasetName' }})
    ingestion_input_configuration: Optional[ingestioninputconfiguration.IngestionInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IngestionInputConfiguration' }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'JobId' }})
    status: Optional[ingestionjobstatus_enum.IngestionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Status' }})
    
