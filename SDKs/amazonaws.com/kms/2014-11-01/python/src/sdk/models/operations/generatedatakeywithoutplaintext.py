from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GenerateDataKeyWithoutPlaintextXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_GENERATE_DATA_KEY_WITHOUT_PLAINTEXT = "TrentService.GenerateDataKeyWithoutPlaintext"


@dataclass
class GenerateDataKeyWithoutPlaintextHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: GenerateDataKeyWithoutPlaintextXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class GenerateDataKeyWithoutPlaintextRequest:
    headers: GenerateDataKeyWithoutPlaintextHeaders = field(default=None)
    request: shared.GenerateDataKeyWithoutPlaintextRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenerateDataKeyWithoutPlaintextResponse:
    content_type: str = field(default=None)
    dependency_timeout_exception: Optional[Any] = field(default=None)
    disabled_exception: Optional[Any] = field(default=None)
    generate_data_key_without_plaintext_response: Optional[shared.GenerateDataKeyWithoutPlaintextResponse] = field(default=None)
    invalid_grant_token_exception: Optional[Any] = field(default=None)
    invalid_key_usage_exception: Optional[Any] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    kms_invalid_state_exception: Optional[Any] = field(default=None)
    key_unavailable_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
