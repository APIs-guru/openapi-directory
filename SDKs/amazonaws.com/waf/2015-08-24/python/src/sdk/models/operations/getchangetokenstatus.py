from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetChangeTokenStatusXAmzTargetEnum(str, Enum):
    AWSWAF_20150824_GET_CHANGE_TOKEN_STATUS = "AWSWAF_20150824.GetChangeTokenStatus"


@dataclass
class GetChangeTokenStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetChangeTokenStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetChangeTokenStatusRequest:
    headers: GetChangeTokenStatusHeaders = field(default=None)
    request: shared.GetChangeTokenStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetChangeTokenStatusResponse:
    content_type: str = field(default=None)
    get_change_token_status_response: Optional[shared.GetChangeTokenStatusResponse] = field(default=None)
    status_code: int = field(default=None)
    waf_internal_error_exception: Optional[Any] = field(default=None)
    waf_nonexistent_item_exception: Optional[Any] = field(default=None)
    
