from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUsersMeVideosQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersMeVideosSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUsersMeVideosRequest:
    query_params: GetUsersMeVideosQueryParams = field()
    security: GetUsersMeVideosSecurity = field()
    

@dataclass
class GetUsersMeVideosResponse:
    content_type: str = field()
    status_code: int = field()
    video_list_response: Optional[Any] = field(default=None)
    
