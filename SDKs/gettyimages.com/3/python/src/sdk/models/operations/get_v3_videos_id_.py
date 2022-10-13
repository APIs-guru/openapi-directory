from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3VideosIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3VideosIDQueryParams:
    fields: Optional[List[shared.VideoDetailFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3VideosIDHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language' }})
    

@dataclass
class GetV3VideosIDRequest:
    path_params: GetV3VideosIDPathParams = field(default=None)
    query_params: GetV3VideosIDQueryParams = field(default=None)
    headers: GetV3VideosIDHeaders = field(default=None)
    

@dataclass
class GetV3VideosIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
