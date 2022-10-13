from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetEntitlementsHistoryQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEntitlementsHistorySecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetEntitlementsHistoryRequest:
    query_params: GetEntitlementsHistoryQueryParams = field(default=None)
    security: GetEntitlementsHistorySecurity = field(default=None)
    

@dataclass
class GetEntitlementsHistoryResponse:
    content_type: str = field(default=None)
    itv_entitlements_history: Optional[shared.ItvEntitlementsHistory] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
