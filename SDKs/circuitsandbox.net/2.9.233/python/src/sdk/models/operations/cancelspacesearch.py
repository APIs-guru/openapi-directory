from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class CancelSpaceSearchPathParams:
    search_id: str = field(metadata={'path_param': { 'field_name': 'searchId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelSpaceSearchSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelSpaceSearchRequest:
    path_params: CancelSpaceSearchPathParams = field()
    security: CancelSpaceSearchSecurity = field()
    

@dataclass
class CancelSpaceSearchResponse:
    content_type: str = field()
    status_code: int = field()
    
