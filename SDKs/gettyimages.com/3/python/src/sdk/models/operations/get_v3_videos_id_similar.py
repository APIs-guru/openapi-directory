from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3VideosIDSimilarPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3VideosIDSimilarQueryParams:
    fields: Optional[List[shared.BlendedVideosFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV3VideosIDSimilarHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class GetV3VideosIDSimilarRequest:
    path_params: GetV3VideosIDSimilarPathParams = field(default=None)
    query_params: GetV3VideosIDSimilarQueryParams = field(default=None)
    headers: GetV3VideosIDSimilarHeaders = field(default=None)
    

@dataclass
class GetV3VideosIDSimilarResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
