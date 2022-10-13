from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class RotateSecretXAmzTargetEnum(str, Enum):
    SECRETSMANAGER_ROTATE_SECRET = "secretsmanager.RotateSecret"


@dataclass
class RotateSecretHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: RotateSecretXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class RotateSecretRequest:
    headers: RotateSecretHeaders = field(default=None)
    request: shared.RotateSecretRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class RotateSecretResponse:
    content_type: str = field(default=None)
    internal_service_error: Optional[Any] = field(default=None)
    invalid_parameter_exception: Optional[Any] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    rotate_secret_response: Optional[shared.RotateSecretResponse] = field(default=None)
    status_code: int = field(default=None)
    
