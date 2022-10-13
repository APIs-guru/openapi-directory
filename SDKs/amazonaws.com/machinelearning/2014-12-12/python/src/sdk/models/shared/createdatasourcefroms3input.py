from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3dataspec


@dataclass_json
@dataclass
class CreateDataSourceFromS3Input:
    compute_statistics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ComputeStatistics' }})
    data_source_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSourceId' }})
    data_source_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSourceName' }})
    data_spec: s3dataspec.S3DataSpec = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DataSpec' }})
    
