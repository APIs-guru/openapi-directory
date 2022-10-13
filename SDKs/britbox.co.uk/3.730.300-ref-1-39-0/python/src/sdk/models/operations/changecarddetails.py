from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ChangeCardDetailsPathParams:
    platform: str = field(default=None, metadata={'path_param': { 'field_name': 'platform', 'style': 'simple', 'explode': False }})
    

@dataclass
class ChangeCardDetailsQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class ChangeCardDetailsSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class ChangeCardDetailsRequest:
    path_params: ChangeCardDetailsPathParams = field(default=None)
    query_params: ChangeCardDetailsQueryParams = field(default=None)
    request: shared.ItvChangeCardDetailsRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: ChangeCardDetailsSecurity = field(default=None)
    

@dataclass
class ChangeCardDetailsResponse:
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
