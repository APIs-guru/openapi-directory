from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class FetchBoundaryByIDPathParams:
    boundary_id: str = field(metadata={'path_param': { 'field_name': 'boundaryId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBoundaryByIDSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    oauth2_authorization_code: Optional[shared.SchemeOauth2AuthorizationCode] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchBoundaryByIDRequest:
    path_params: FetchBoundaryByIDPathParams = field()
    security: FetchBoundaryByIDSecurity = field()
    

@dataclass
class FetchBoundaryByIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    boundary: Optional[Any] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    
