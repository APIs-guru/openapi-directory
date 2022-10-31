from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3VideosIDSameSeriesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3VideosIDSameSeriesQueryParams:
    fields: Optional[List[shared.BlendedVideosFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3VideosIDSameSeriesHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3VideosIDSameSeriesRequest:
    path_params: GetV3VideosIDSameSeriesPathParams = field(default=None)
    query_params: GetV3VideosIDSameSeriesQueryParams = field(default=None)
    headers: GetV3VideosIDSameSeriesHeaders = field(default=None)
    

@dataclass
class GetV3VideosIDSameSeriesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
