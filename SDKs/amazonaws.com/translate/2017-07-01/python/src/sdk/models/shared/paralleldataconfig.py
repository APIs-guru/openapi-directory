from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import paralleldataformat_enum


@dataclass_json
@dataclass
class ParallelDataConfig:
    format: paralleldataformat_enum.ParallelDataFormatEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Format' }})
    s3_uri: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Uri' }})
    
