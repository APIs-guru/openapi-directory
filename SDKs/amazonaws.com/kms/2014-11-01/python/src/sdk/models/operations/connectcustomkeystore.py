from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ConnectCustomKeyStoreXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_CONNECT_CUSTOM_KEY_STORE = "TrentService.ConnectCustomKeyStore"


@dataclass
class ConnectCustomKeyStoreHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    x_amz_target: ConnectCustomKeyStoreXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectCustomKeyStoreRequest:
    headers: ConnectCustomKeyStoreHeaders = field(default=None)
    request: shared.ConnectCustomKeyStoreRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ConnectCustomKeyStoreResponse:
    cloud_hsm_cluster_invalid_configuration_exception: Optional[Any] = field(default=None)
    cloud_hsm_cluster_not_active_exception: Optional[Any] = field(default=None)
    connect_custom_key_store_response: Optional[dict[str, Any]] = field(default=None)
    content_type: str = field(default=None)
    custom_key_store_invalid_state_exception: Optional[Any] = field(default=None)
    custom_key_store_not_found_exception: Optional[Any] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
