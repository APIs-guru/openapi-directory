from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetSaveOfferQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSaveOfferSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetSaveOfferRequest:
    query_params: GetSaveOfferQueryParams = field(default=None)
    security: GetSaveOfferSecurity = field(default=None)
    

@dataclass
class GetSaveOfferResponse:
    content_type: str = field(default=None)
    itv_get_discount_response: Optional[shared.ItvGetDiscountResponse] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
