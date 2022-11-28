from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
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
    r"""CreateStudioRequestBodyStudioEncryptionConfiguration
    Configuration of the encryption method that is used for the studio.
    """
    
    key_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyArn') }})
    key_type: Optional[shared.StudioEncryptionConfigurationKeyTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyType') }})
    

@dataclass_json
@dataclass
class CreateStudioRequestBody:
    admin_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('adminRoleArn') }})
    display_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    studio_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioName') }})
    user_role_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('userRoleArn') }})
    studio_encryption_configuration: Optional[CreateStudioRequestBodyStudioEncryptionConfiguration] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('studioEncryptionConfiguration') }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tags') }})
    

@dataclass
class CreateStudioRequest:
    headers: CreateStudioHeaders = field()
    request: CreateStudioRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateStudioResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    create_studio_response: Optional[shared.CreateStudioResponse] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
