from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetV3VideosQueryParams:
    fields: Optional[List[shared.VideoDetailFieldValuesEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': False }})
    ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'ids', 'style': 'form', 'explode': False }})
    

@dataclass
class GetV3VideosHeaders:
    accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Accept-Language', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetV3VideosRequest:
    query_params: GetV3VideosQueryParams = field(default=None)
    headers: GetV3VideosHeaders = field(default=None)
    

@dataclass
class GetV3VideosResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
