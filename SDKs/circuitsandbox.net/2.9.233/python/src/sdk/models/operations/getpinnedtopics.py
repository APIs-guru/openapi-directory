from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetPinnedTopicsPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPinnedTopicsSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPinnedTopicsRequest:
    path_params: GetPinnedTopicsPathParams = field(default=None)
    security: GetPinnedTopicsSecurity = field(default=None)
    

@dataclass
class GetPinnedTopicsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    space_pinned_topics: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    
