from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CheckPreviousEntitlementsQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class CheckPreviousEntitlementsSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CheckPreviousEntitlementsRequest:
    query_params: CheckPreviousEntitlementsQueryParams = field(default=None)
    security: CheckPreviousEntitlementsSecurity = field(default=None)
    

@dataclass
class CheckPreviousEntitlementsResponse:
    content_type: str = field(default=None)
    itv_had_entitlement: Optional[shared.ItvHadEntitlement] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
