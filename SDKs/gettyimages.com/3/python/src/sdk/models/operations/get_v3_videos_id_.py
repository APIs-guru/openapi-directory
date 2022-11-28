from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetV3VideosIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3VideosIDQueryParams:
    fields: Optional[List[shared.VideoDetailFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3VideosIDHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3VideosIDRequest:
    headers: GetV3VideosIDHeaders = field()
    path_params: GetV3VideosIDPathParams = field()
    query_params: GetV3VideosIDQueryParams = field()
    

@dataclass
class GetV3VideosIDResponse:
    content_type: str = field()
    status_code: int = field()
    
