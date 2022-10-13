from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import automls3datasource


@dataclass_json
@dataclass
class AutoMlDataSource:
    s3_data_source: automls3datasource.AutoMls3DataSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataSource' }})
    
