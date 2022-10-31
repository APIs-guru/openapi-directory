from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateStudioHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_client_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Client-Token', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateStudioRequestBodyStudioEncryptionConfiguration:
    key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyArn' }})
    key_type: Optional[shared.StudioEncryptionConfigurationKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyType' }})
    

@dataclass_json
@dataclass
class CreateStudioRequestBody:
    admin_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adminRoleArn' }})
    display_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    studio_encryption_configuration: Optional[CreateStudioRequestBodyStudioEncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioEncryptionConfiguration' }})
    studio_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'studioName' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    user_role_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userRoleArn' }})
    

@dataclass
class CreateStudioRequest:
    headers: CreateStudioHeaders = field(default=None)
    request: CreateStudioRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateStudioResponse:
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_studio_response: Optional[shared.CreateStudioResponse] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
