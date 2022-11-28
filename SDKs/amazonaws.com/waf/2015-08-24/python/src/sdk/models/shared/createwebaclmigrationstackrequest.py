from dataclasses import dataclass, field
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CreateWebACLMigrationStackRequest:
    ignore_unsupported_type: bool = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('IgnoreUnsupportedType') }})
    s3_bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketName') }})
    web_acl_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('WebACLId') }})
    
