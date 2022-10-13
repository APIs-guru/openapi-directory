from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import s3dataconfig


@dataclass_json
@dataclass
class BatchInferenceJobInput:
    s3_data_source: s3dataconfig.S3DataConfig = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3DataSource' }})
    
