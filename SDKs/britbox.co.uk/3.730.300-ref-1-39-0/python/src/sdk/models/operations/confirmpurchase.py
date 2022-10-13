from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfirmPurchasePathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfirmPurchaseQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfirmPurchaseSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ConfirmPurchaseRequest:
    path_params: ConfirmPurchasePathParams = field(default=None)
    query_params: ConfirmPurchaseQueryParams = field(default=None)
    request: shared.ItvPurchaseRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ConfirmPurchaseSecurity = field(default=None)
    

@dataclass
class ConfirmPurchaseResponse:
    content_type: str = field(default=None)
    itv_purchase: Optional[shared.ItvPurchase] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
