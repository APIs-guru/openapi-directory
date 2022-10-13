from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUsersMeVideosQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersMeVideosSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeVideosRequest:
    query_params: GetUsersMeVideosQueryParams = field(default=None)
    security: GetUsersMeVideosSecurity = field(default=None)
    

@dataclass
class GetUsersMeVideosResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    video_list_response: Optional[Any] = field(default=None)
    
