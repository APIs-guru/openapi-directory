from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCurrentEntitlementQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCurrentEntitlementSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCurrentEntitlementRequest:
    query_params: GetCurrentEntitlementQueryParams = field()
    security: GetCurrentEntitlementSecurity = field()
    

@dataclass
class GetCurrentEntitlementResponse:
    content_type: str = field()
    status_code: int = field()
    itv_entitlement_current: Optional[shared.ItvEntitlementCurrent] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
