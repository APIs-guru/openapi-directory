from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetGroupUsersQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    group_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGroupUsersRequest:
    query_params: GetGroupUsersQueryParams = field(default=None)
    

@dataclass
class GetGroupUsersResponse:
    content_type: str = field(default=None)
    group_user_entities: Optional[List[shared.GroupUserEntity]] = field(default=None)
    status_code: int = field(default=None)
    
