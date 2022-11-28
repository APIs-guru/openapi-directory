from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2GetAdminsAndFounderOfGroupPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetAdminsAndFounderOfGroupQueryParams:
    currentpage: int = field(metadata={'query_param': { 'field_name': 'currentpage', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupV2GetAdminsAndFounderOfGroupRequest:
    path_params: GroupV2GetAdminsAndFounderOfGroupPathParams = field()
    query_params: GroupV2GetAdminsAndFounderOfGroupQueryParams = field()
    

@dataclass
class GroupV2GetAdminsAndFounderOfGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
