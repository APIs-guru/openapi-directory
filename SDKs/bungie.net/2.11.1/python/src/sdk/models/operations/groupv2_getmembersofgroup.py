from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2GetMembersOfGroupPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetMembersOfGroupQueryParams:
    currentpage: int = field(default=None, metadata={'query_param': { 'field_name': 'currentpage', 'style': 'form', 'explode': True }})
    member_type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'memberType', 'style': 'form', 'explode': True }})
    name_search: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nameSearch', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupV2GetMembersOfGroupRequest:
    path_params: GroupV2GetMembersOfGroupPathParams = field(default=None)
    query_params: GroupV2GetMembersOfGroupQueryParams = field(default=None)
    

@dataclass
class GroupV2GetMembersOfGroupResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
