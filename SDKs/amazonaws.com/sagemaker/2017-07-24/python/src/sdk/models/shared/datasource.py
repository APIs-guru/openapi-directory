from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import filesystemdatasource
from . import s3datasource


@dataclass_json
@dataclass
class DataSource:
    file_system_data_source: Optional[filesystemdatasource.FileSystemDataSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileSystemDataSource' }})
    s3_data_source: Optional[s3datasource.S3DataSource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataSource' }})
    
