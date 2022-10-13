from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class FetchFieldByIDPathParams:
    field_id: str = field(default=None, metadata={'path_param': { 'field_name': 'fieldId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFieldByIDSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FetchFieldByIDSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchFieldByIDSecurity:
    option1: Optional[FetchFieldByIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FetchFieldByIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FetchFieldByIDRequest:
    path_params: FetchFieldByIDPathParams = field(default=None)
    security: FetchFieldByIDSecurity = field(default=None)
    

@dataclass
class FetchFieldByIDResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    field: Optional[Any] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
