from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import rdsdataspec


@dataclass_json
@dataclass
class CreateDataSourceFromRdsInput:
    compute_statistics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputeStatistics' }})
    data_source_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSourceId' }})
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSourceName' }})
    rds_data: rdsdataspec.RdsDataSpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RDSData' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    
