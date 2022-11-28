from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateDataSourceFromRedshiftInput:
    data_source_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceId') }})
    data_spec: RedshiftDataSpec = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSpec') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleARN') }})
    compute_statistics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ComputeStatistics') }})
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DataSourceName') }})
    
