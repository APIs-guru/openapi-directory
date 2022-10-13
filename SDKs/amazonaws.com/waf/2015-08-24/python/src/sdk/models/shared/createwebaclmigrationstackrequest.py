from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateWebACLMigrationStackRequest:
    ignore_unsupported_type: bool = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IgnoreUnsupportedType' }})
    s3_bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketName' }})
    web_acl_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WebACLId' }})
    
