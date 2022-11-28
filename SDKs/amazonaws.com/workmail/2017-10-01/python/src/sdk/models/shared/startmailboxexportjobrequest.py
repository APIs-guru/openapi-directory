from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class StartMailboxExportJobRequest:
    client_token: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClientToken') }})
    entity_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('EntityId') }})
    kms_key_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('KmsKeyArn') }})
    organization_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('OrganizationId') }})
    role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('RoleArn') }})
    s3_bucket_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3BucketName') }})
    s3_prefix: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('S3Prefix') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Description') }})
    
