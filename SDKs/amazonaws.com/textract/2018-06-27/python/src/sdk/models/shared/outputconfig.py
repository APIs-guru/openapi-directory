from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class OutputConfig:
    s3_bucket: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Bucket' }})
    s3_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Prefix' }})
    
