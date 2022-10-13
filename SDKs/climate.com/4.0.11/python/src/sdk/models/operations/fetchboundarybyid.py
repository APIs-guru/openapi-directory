from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class FetchBoundaryByIDPathParams:
    boundary_id: str = field(default=None, metadata={'path_param': { 'field_name': 'boundaryId', 'style': 'simple', 'explode': False }})
    

@dataclass
class FetchBoundaryByIDSecurityOption1:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class FetchBoundaryByIDSecurityOption2:
    oauth2_authorization_code: shared.SchemeOauth2AuthorizationCode = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class FetchBoundaryByIDSecurity:
    option1: Optional[FetchBoundaryByIDSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[FetchBoundaryByIDSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class FetchBoundaryByIDRequest:
    path_params: FetchBoundaryByIDPathParams = field(default=None)
    security: FetchBoundaryByIDSecurity = field(default=None)
    

@dataclass
class FetchBoundaryByIDResponse:
    boundary: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
