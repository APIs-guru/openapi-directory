from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from sdk.models import shared

class ViewBillingXAmzTargetEnum(str, Enum):
    ROUTE53_DOMAINS_V20140515_VIEW_BILLING = "Route53Domains_v20140515.ViewBilling"


@dataclass
class ViewBillingHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    x_amz_target: ViewBillingXAmzTargetEnum = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Target' }})
    

@dataclass
class ViewBillingRequest:
    headers: ViewBillingHeaders = field(default=None)
    request: shared.ViewBillingRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ViewBillingResponse:
    content_type: str = field(default=None)
    invalid_input: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    view_billing_response: Optional[shared.ViewBillingResponse] = field(default=None)
    
