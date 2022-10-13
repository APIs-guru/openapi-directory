from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class S3Configuration:
    bucket_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BucketARN' }})
    file_key: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FileKey' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleARN' }})
    
