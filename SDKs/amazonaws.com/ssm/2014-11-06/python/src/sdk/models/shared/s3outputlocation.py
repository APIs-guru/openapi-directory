from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3OutputLocation:
    output_s3_bucket_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3BucketName' }})
    output_s3_key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3KeyPrefix' }})
    output_s3_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OutputS3Region' }})
    
