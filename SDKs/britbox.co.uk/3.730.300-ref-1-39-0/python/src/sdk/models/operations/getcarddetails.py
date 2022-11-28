from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCardDetailsPathParams:
    platform: str = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCardDetailsQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCardDetailsSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCardDetailsRequest:
    path_params: GetCardDetailsPathParams = field()
    query_params: GetCardDetailsQueryParams = field()
    request: shared.ItvGetCardDetailsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: GetCardDetailsSecurity = field()
    

@dataclass
class GetCardDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    itv_card_details: Optional[shared.ItvCardDetails] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    
