from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ReEncryptXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_RE_ENCRYPT = "TrentService.ReEncrypt"


@dataclass
class ReEncryptHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ReEncryptXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ReEncryptRequest:
    headers: ReEncryptHeaders = field(default=None)
    request: shared.ReEncryptRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ReEncryptResponse:
    content_type: str = field(default=None)
    dependency_timeout_exception: Optional[Any] = field(default=None)
    disabled_exception: Optional[Any] = field(default=None)
    incorrect_key_exception: Optional[Any] = field(default=None)
    invalid_ciphertext_exception: Optional[Any] = field(default=None)
    invalid_grant_token_exception: Optional[Any] = field(default=None)
    invalid_key_usage_exception: Optional[Any] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    kms_invalid_state_exception: Optional[Any] = field(default=None)
    key_unavailable_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    re_encrypt_response: Optional[shared.ReEncryptResponse] = field(default=None)
    status_code: int = field(default=None)
    
