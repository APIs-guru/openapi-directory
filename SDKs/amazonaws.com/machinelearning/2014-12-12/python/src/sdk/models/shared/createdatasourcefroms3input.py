from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDataSourceFromS3Input:
    data_source_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceId') }})
    data_spec: S3DataSpec = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSpec') }})
    compute_statistics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeStatistics') }})
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceName') }})
    
