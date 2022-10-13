from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from . import s3bucketlogdestination


@dataclass_json
@dataclass
class AudioLogDestination:
    s3_bucket: s3bucketlogdestination.S3BucketLogDestination = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3Bucket' }})
    
