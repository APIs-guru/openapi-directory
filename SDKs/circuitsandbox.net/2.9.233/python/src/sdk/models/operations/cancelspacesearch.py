from dataclasses import dataclass, field



@dataclass
class CancelSpaceSearchPathParams:
    search_id: str = field(default=None, metadata={'path_param': { 'field_name': 'searchId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelSpaceSearchSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class CancelSpaceSearchRequest:
    path_params: CancelSpaceSearchPathParams = field(default=None)
    security: CancelSpaceSearchSecurity = field(default=None)
    

@dataclass
class CancelSpaceSearchResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
