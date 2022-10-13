from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3ContentBaseLocationUpdate:
    base_path_update: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BasePathUpdate' }})
    bucket_arn_update: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketARNUpdate' }})
    
