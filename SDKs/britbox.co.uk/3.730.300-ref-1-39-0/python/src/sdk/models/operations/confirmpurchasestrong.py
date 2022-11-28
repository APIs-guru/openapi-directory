from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfirmPurchaseStrongPathParams:
    platform: str = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfirmPurchaseStrongQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfirmPurchaseStrongSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ConfirmPurchaseStrongRequest:
    path_params: ConfirmPurchaseStrongPathParams = field()
    query_params: ConfirmPurchaseStrongQueryParams = field()
    request: shared.ItvPurchaseStrongRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ConfirmPurchaseStrongSecurity = field()
    

@dataclass
class ConfirmPurchaseStrongResponse:
    content_type: str = field()
    status_code: int = field()
    itv_purchase_strong_response: Optional[shared.ItvPurchaseStrongResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
