from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DataIngestionJobSummary:
    r"""DataIngestionJobSummary
    Provides information about a specified data ingestion job, including dataset information, data ingestion configuration, and status. 
    """
    
    dataset_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetArn') }})
    dataset_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DatasetName') }})
    ingestion_input_configuration: Optional[IngestionInputConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IngestionInputConfiguration') }})
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('JobId') }})
    status: Optional[IngestionJobStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Status') }})
    
