from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class FetchFieldByIDPathParams:
    field_id: str = field(metadata={'path_param': { 'field_name': 'fieldId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchFieldByIDSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchFieldByIDRequest:
    path_params: FetchFieldByIDPathParams = field()
    security: FetchFieldByIDSecurity = field()
    

@dataclass
class FetchFieldByIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    field: Optional[Any] = field(default=None)
    
