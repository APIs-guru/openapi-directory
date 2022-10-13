from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DisconnectCustomKeyStoreXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_DISCONNECT_CUSTOM_KEY_STORE = "TrentService.DisconnectCustomKeyStore"


@dataclass
class DisconnectCustomKeyStoreHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DisconnectCustomKeyStoreXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DisconnectCustomKeyStoreRequest:
    headers: DisconnectCustomKeyStoreHeaders = field(default=None)
    request: shared.DisconnectCustomKeyStoreRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DisconnectCustomKeyStoreResponse:
    content_type: str = field(default=None)
    custom_key_store_invalid_state_exception: Optional[Any] = field(default=None)
    custom_key_store_not_found_exception: Optional[Any] = field(default=None)
    disconnect_custom_key_store_response: Optional[dict[str, Any]] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
