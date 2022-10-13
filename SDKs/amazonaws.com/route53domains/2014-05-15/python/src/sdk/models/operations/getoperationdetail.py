from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetOperationDetailXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_GET_OPERATION_DETAIL = "Route53Domains_v20140515.GetOperationDetail"


@dataclass
class GetOperationDetailHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetOperationDetailXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetOperationDetailRequest:
    headers: GetOperationDetailHeaders = field(default=None)
    request: shared.GetOperationDetailRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetOperationDetailResponse:
    content_type: str = field(default=None)
    get_operation_detail_response: Optional[shared.GetOperationDetailResponse] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
