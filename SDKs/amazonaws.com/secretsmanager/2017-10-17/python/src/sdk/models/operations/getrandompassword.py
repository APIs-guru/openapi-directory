from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetRandomPasswordXAmzTargetEnum(str, Enum):
    SECRETSMANAGER_GET_RANDOM_PASSWORD = "secretsmanager.GetRandomPassword"


@dataclass
class GetRandomPasswordHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GetRandomPasswordXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetRandomPasswordRequest:
    headers: GetRandomPasswordHeaders = field(default=None)
    request: shared.GetRandomPasswordRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetRandomPasswordResponse:
    content_type: str = field(default=None)
    get_random_password_response: Optional[shared.GetRandomPasswordResponse] = field(default=None)
    internal_service_error: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
