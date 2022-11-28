from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetUsersUserIDGroupsPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUsersUserIDGroupsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    group_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'group_id', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsersUserIDGroupsRequest:
    path_params: GetUsersUserIDGroupsPathParams = field()
    query_params: GetUsersUserIDGroupsQueryParams = field()
    

@dataclass
class GetUsersUserIDGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    group_user_entities: Optional[List[shared.GroupUserEntity]] = field(default=None)
    
