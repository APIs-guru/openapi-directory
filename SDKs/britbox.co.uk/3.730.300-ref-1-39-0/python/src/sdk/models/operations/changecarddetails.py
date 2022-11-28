from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChangeCardDetailsPathParams:
    platform: str = field(metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangeCardDetailsQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangeCardDetailsSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ChangeCardDetailsRequest:
    path_params: ChangeCardDetailsPathParams = field()
    query_params: ChangeCardDetailsQueryParams = field()
    request: shared.ItvChangeCardDetailsRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: ChangeCardDetailsSecurity = field()
    

@dataclass
class ChangeCardDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    
