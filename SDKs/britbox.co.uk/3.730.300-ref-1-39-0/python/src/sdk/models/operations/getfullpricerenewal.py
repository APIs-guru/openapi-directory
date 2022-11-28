from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetFullPriceRenewalQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetFullPriceRenewalSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetFullPriceRenewalRequest:
    query_params: GetFullPriceRenewalQueryParams = field()
    security: GetFullPriceRenewalSecurity = field()
    

@dataclass
class GetFullPriceRenewalResponse:
    content_type: str = field()
    status_code: int = field()
    itv_subscription_full_price_renewal: Optional[shared.ItvSubscriptionFullPriceRenewal] = field(default=None)
    
