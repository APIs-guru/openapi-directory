from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import s3datatype_enum


@dataclass_json
@dataclass
class TransformS3DataSource:
    s3_data_type: s3datatype_enum.S3DataTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataType' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
