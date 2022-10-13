from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetPresenceQueryParams:
    user_ids: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'userIds', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPresenceSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPresenceRequest:
    query_params: GetPresenceQueryParams = field(default=None)
    security: GetPresenceSecurity = field(default=None)
    

@dataclass
class GetPresenceResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    presences: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
