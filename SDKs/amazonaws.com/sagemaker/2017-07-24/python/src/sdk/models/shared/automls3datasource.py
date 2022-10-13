from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import automls3datatype_enum


@dataclass_json
@dataclass
class AutoMls3DataSource:
    s3_data_type: automls3datatype_enum.AutoMls3DataTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3DataType' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
