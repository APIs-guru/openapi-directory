from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3Destination:
    bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bucketName' }})
    key_prefix: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyPrefix' }})
    kms_key_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyArn' }})
    
