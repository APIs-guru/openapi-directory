from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserRequestsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserRequestsRequest:
    query_params: GetUserRequestsQueryParams = field()
    

@dataclass
class GetUserRequestsResponse:
    content_type: str = field()
    status_code: int = field()
    user_request_entities: Optional[List[shared.UserRequestEntity]] = field(default=None)
    
