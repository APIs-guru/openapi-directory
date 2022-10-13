from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3BucketLogDestination:
    kms_key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyArn' }})
    log_prefix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logPrefix' }})
    s3_bucket_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 's3BucketArn' }})
    
