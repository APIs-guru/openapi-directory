from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GenerateDataKeyXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_GENERATE_DATA_KEY = "TrentService.GenerateDataKey"


@dataclass
class GenerateDataKeyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GenerateDataKeyXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GenerateDataKeyRequest:
    headers: GenerateDataKeyHeaders = field(default=None)
    request: shared.GenerateDataKeyRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GenerateDataKeyResponse:
    content_type: str = field(default=None)
    dependency_timeout_exception: Optional[Any] = field(default=None)
    disabled_exception: Optional[Any] = field(default=None)
    generate_data_key_response: Optional[shared.GenerateDataKeyResponse] = field(default=None)
    invalid_grant_token_exception: Optional[Any] = field(default=None)
    invalid_key_usage_exception: Optional[Any] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    kms_invalid_state_exception: Optional[Any] = field(default=None)
    key_unavailable_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
