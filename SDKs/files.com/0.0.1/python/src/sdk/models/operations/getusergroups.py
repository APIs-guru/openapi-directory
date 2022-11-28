from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUserGroupsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    group_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserGroupsRequest:
    query_params: GetUserGroupsQueryParams = field()
    

@dataclass
class GetUserGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    group_user_entities: Optional[List[shared.GroupUserEntity]] = field(default=None)
    
