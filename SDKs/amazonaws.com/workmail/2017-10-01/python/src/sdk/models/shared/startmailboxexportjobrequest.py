from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StartMailboxExportJobRequest:
    client_token: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClientToken' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Description' }})
    entity_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntityId' }})
    kms_key_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KmsKeyArn' }})
    organization_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'OrganizationId' }})
    role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RoleArn' }})
    s3_bucket_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3BucketName' }})
    s3_prefix: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'S3Prefix' }})
    
