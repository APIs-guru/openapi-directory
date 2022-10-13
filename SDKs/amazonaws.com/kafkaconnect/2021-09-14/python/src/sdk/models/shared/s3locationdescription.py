from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3LocationDescription:
    bucket_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketArn' }})
    file_key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fileKey' }})
    object_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'objectVersion' }})
    
