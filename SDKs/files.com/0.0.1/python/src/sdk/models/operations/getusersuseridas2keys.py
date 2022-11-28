from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersUserIDAs2KeysPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserIDAs2KeysQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersUserIDAs2KeysRequest:
    path_params: GetUsersUserIDAs2KeysPathParams = field()
    query_params: GetUsersUserIDAs2KeysQueryParams = field()
    

@dataclass
class GetUsersUserIDAs2KeysResponse:
    content_type: str = field()
    status_code: int = field()
    as2_key_entities: Optional[List[shared.As2KeyEntity]] = field(default=None)
    
