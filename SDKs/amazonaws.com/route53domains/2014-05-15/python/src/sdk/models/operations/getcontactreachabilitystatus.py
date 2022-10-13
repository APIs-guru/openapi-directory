from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class GetContactReachabilityStatusXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_GET_CONTACT_REACHABILITY_STATUS = "Route53Domains_v20140515.GetContactReachabilityStatus"


@dataclass
class GetContactReachabilityStatusHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: GetContactReachabilityStatusXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class GetContactReachabilityStatusRequest:
    headers: GetContactReachabilityStatusHeaders = field(default=None)
    request: shared.GetContactReachabilityStatusRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetContactReachabilityStatusResponse:
    content_type: str = field(default=None)
    get_contact_reachability_status_response: Optional[shared.GetContactReachabilityStatusResponse] = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    operation_limit_exceeded: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    unsupported_tld: Optional[Any] = field(default=None)
    
