from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetOperationXAmzTargetEnum(str, Enum):
    ROUTE53_AUTO_NAMING_V20170314_GET_OPERATION = "Route53AutoNaming_v20170314.GetOperation"


@dataclass
class GetOperationHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetOperationXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetOperationRequest:
    headers: GetOperationHeaders = field(default=None)
    request: shared.GetOperationRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetOperationResponse:
    content_type: str = field(default=None)
    get_operation_response: Optional[shared.GetOperationResponse] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    operation_not_found: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
