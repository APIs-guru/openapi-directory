from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateUserXAmzTargetEnum(str, Enum):
    AMAZON_MEMORY_DB_CREATE_USER = "AmazonMemoryDB.CreateUser"


@dataclass
class CreateUserHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: CreateUserXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateUserRequest:
    headers: CreateUserHeaders = field(default=None)
    request: shared.CreateUserRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateUserResponse:
    content_type: str = field(default=None)
    create_user_response: Optional[shared.CreateUserResponse] = field(default=None)
    duplicate_user_name_fault: Optional[Any] = field(default=None)
    invalid_parameter_combination_exception: Optional[Any] = field(default=None)
    invalid_parameter_value_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    tag_quota_per_resource_exceeded: Optional[Any] = field(default=None)
    user_already_exists_fault: Optional[Any] = field(default=None)
    user_quota_exceeded_fault: Optional[Any] = field(default=None)
    
