from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCardDetailsPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetCardDetailsQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCardDetailsSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCardDetailsRequest:
    path_params: GetCardDetailsPathParams = field(default=None)
    query_params: GetCardDetailsQueryParams = field(default=None)
    request: shared.ItvGetCardDetailsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: GetCardDetailsSecurity = field(default=None)
    

@dataclass
class GetCardDetailsResponse:
    content_type: str = field(default=None)
    itv_card_details: Optional[shared.ItvCardDetails] = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
