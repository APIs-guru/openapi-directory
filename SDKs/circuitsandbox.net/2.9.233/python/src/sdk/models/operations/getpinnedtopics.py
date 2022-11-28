from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class GetPinnedTopicsPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPinnedTopicsSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetPinnedTopicsRequest:
    path_params: GetPinnedTopicsPathParams = field()
    security: GetPinnedTopicsSecurity = field()
    

@dataclass
class GetPinnedTopicsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    space_pinned_topics: Optional[List[Any]] = field(default=None)
    
