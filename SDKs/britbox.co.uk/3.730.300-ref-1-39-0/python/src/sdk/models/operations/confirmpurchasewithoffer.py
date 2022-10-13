from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConfirmPurchaseWithOfferPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConfirmPurchaseWithOfferQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ConfirmPurchaseWithOfferSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ConfirmPurchaseWithOfferRequest:
    path_params: ConfirmPurchaseWithOfferPathParams = field(default=None)
    query_params: ConfirmPurchaseWithOfferQueryParams = field(default=None)
    request: shared.ItvPurchaseWithOfferRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ConfirmPurchaseWithOfferSecurity = field(default=None)
    

@dataclass
class ConfirmPurchaseWithOfferResponse:
    content_type: str = field(default=None)
    itv_purchase_with_offer_response: Optional[shared.ItvPurchaseWithOfferResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
