from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ReviewGetRepliesPathParams:
    review_id: str = field(metadata={'path_param': { 'field_name': 'reviewId', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReviewGetRepliesQueryParams:
    pg: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pg', 'style': 'form', 'explode': True }})
    rpp: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'rpp', 'style': 'form', 'explode': True }})
    

@dataclass
class ReviewGetRepliesRequest:
    path_params: ReviewGetRepliesPathParams = field()
    query_params: ReviewGetRepliesQueryParams = field()
    

@dataclass
class ReviewGetRepliesResponse:
    content_type: str = field()
    status_code: int = field()
    big_oven_model_api_replies: Optional[List[shared.BigOvenModelAPIReply]] = field(default=None)
    body: Optional[bytes] = field(default=None)
    
