from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetRecentSearchesSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetRecentSearchesRequest:
    security: GetRecentSearchesSecurity = field()
    

@dataclass
class GetRecentSearchesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
