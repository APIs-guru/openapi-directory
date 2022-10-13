from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBillingHistoryPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBillingHistoryQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBillingHistorySecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetBillingHistoryRequest:
    path_params: GetBillingHistoryPathParams = field(default=None)
    query_params: GetBillingHistoryQueryParams = field(default=None)
    request: shared.ItvBillingHistoryRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GetBillingHistorySecurity = field(default=None)
    

@dataclass
class GetBillingHistoryResponse:
    content_type: str = field(default=None)
    itv_billing_history: Optional[shared.ItvBillingHistory] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
