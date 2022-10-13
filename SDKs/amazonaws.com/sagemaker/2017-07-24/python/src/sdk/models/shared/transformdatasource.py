from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import transforms3datasource


@dataclass_json
@dataclass
class TransformDataSource:
    s3_data_source: transforms3datasource.TransformS3DataSource = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataSource' }})
    
