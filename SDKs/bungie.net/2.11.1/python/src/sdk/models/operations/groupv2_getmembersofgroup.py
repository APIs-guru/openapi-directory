from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2GetMembersOfGroupPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetMembersOfGroupQueryParams:
    currentpage: int = field(metadata={'query_param': { 'field_name': 'currentpage', 'style': 'form', 'explode': True }})
    member_type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'memberType', 'style': 'form', 'explode': True }})
    name_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameSearch', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupV2GetMembersOfGroupRequest:
    path_params: GroupV2GetMembersOfGroupPathParams = field()
    query_params: GroupV2GetMembersOfGroupQueryParams = field()
    

@dataclass
class GroupV2GetMembersOfGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
