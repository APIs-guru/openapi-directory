from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfirmPurchasePathParams:
    platform: str = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfirmPurchaseQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfirmPurchaseSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ConfirmPurchaseRequest:
    path_params: ConfirmPurchasePathParams = field()
    query_params: ConfirmPurchaseQueryParams = field()
    request: shared.ItvPurchaseRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ConfirmPurchaseSecurity = field()
    

@dataclass
class ConfirmPurchaseResponse:
    content_type: str = field()
    status_code: int = field()
    itv_purchase: Optional[shared.ItvPurchase] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
