from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetLikesPathParams:
    item_id: str = field(default=None, metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLikesQueryParams:
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    search_pointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchPointer', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLikesSecurity:
    oauth: shared.SchemeOauth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLikesRequest:
    path_params: GetLikesPathParams = field(default=None)
    query_params: GetLikesQueryParams = field(default=None)
    security: GetLikesSecurity = field(default=None)
    

@dataclass
class GetLikesResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    participants_like_result: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
