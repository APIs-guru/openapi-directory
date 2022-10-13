from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import s3bucket
from . import s3object


@dataclass_json
@dataclass
class ResourcesAffected:
    s3_bucket: Optional[s3bucket.S3Bucket] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Bucket' }})
    s3_object: Optional[s3object.S3Object] = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Object' }})
    
