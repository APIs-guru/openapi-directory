from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3ContentBaseLocation:
    base_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BasePath' }})
    bucket_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketARN' }})
    
