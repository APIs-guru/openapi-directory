from dataclasses import dataclass, field



@dataclass
class GetRecentSearchesSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRecentSearchesRequest:
    security: GetRecentSearchesSecurity = field(default=None)
    

@dataclass
class GetRecentSearchesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
