from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class CreateCustomKeyStoreXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_CREATE_CUSTOM_KEY_STORE = "TrentService.CreateCustomKeyStore"


@dataclass
class CreateCustomKeyStoreHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: CreateCustomKeyStoreXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class CreateCustomKeyStoreRequest:
    headers: CreateCustomKeyStoreHeaders = field(default=None)
    request: shared.CreateCustomKeyStoreRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateCustomKeyStoreResponse:
    cloud_hsm_cluster_in_use_exception: Optional[Any] = field(default=None)
    cloud_hsm_cluster_invalid_configuration_exception: Optional[Any] = field(default=None)
    cloud_hsm_cluster_not_active_exception: Optional[Any] = field(default=None)
    cloud_hsm_cluster_not_found_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_custom_key_store_response: Optional[shared.CreateCustomKeyStoreResponse] = field(default=None)
    custom_key_store_name_in_use_exception: Optional[Any] = field(default=None)
    incorrect_trust_anchor_exception: Optional[Any] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
