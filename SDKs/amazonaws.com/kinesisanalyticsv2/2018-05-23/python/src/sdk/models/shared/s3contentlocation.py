from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3ContentLocation:
    bucket_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketARN' }})
    file_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileKey' }})
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ObjectVersion' }})
    
