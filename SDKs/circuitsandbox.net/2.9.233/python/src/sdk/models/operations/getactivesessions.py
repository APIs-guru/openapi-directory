from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetActiveSessionsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetActiveSessionsRequest:
    security: GetActiveSessionsSecurity = field()
    

@dataclass
class GetActiveSessionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
