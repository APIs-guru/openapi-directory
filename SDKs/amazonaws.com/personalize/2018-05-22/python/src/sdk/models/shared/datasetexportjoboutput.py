from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import s3dataconfig


@dataclass_json
@dataclass
class DatasetExportJobOutput:
    s3_data_destination: s3dataconfig.S3DataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3DataDestination' }})
    
