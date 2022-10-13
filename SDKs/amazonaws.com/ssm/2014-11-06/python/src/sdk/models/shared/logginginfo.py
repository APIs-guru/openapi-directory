from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class LoggingInfo:
    s3_bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketName' }})
    s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3KeyPrefix' }})
    s3_region: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Region' }})
    
