from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class DescribeCustomKeyStoresXAmzTargetEnum(str, Enum):
    TRENT_SERVICE_DESCRIBE_CUSTOM_KEY_STORES = "TrentService.DescribeCustomKeyStores"


@dataclass
class DescribeCustomKeyStoresHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: DescribeCustomKeyStoresXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class DescribeCustomKeyStoresRequest:
    headers: DescribeCustomKeyStoresHeaders = field(default=None)
    request: shared.DescribeCustomKeyStoresRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class DescribeCustomKeyStoresResponse:
    content_type: str = field(default=None)
    custom_key_store_not_found_exception: Optional[Any] = field(default=None)
    describe_custom_key_stores_response: Optional[shared.DescribeCustomKeyStoresResponse] = field(default=None)
    invalid_marker_exception: Optional[Any] = field(default=None)
    kms_internal_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
