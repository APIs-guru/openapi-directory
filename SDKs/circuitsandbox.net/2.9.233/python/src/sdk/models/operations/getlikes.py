from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetLikesPathParams:
    item_id: str = field(metadata={'path_param': { 'field_name': 'itemId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLikesQueryParams:
    number_of_results: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'numberOfResults', 'style': 'form', 'explode': True }})
    search_pointer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'searchPointer', 'style': 'form', 'explode': True }})
    

@dataclass
class GetLikesSecurity:
    oauth: shared.SchemeOauth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetLikesRequest:
    path_params: GetLikesPathParams = field()
    query_params: GetLikesQueryParams = field()
    security: GetLikesSecurity = field()
    

@dataclass
class GetLikesResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    participants_like_result: Optional[Any] = field(default=None)
    
