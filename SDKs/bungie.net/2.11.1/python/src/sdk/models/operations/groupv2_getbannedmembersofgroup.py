from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupV2GetBannedMembersOfGroupPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetBannedMembersOfGroupQueryParams:
    currentpage: int = field(metadata={'query_param': { 'field_name': 'currentpage', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupV2GetBannedMembersOfGroupSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2GetBannedMembersOfGroupRequest:
    path_params: GroupV2GetBannedMembersOfGroupPathParams = field()
    query_params: GroupV2GetBannedMembersOfGroupQueryParams = field()
    security: GroupV2GetBannedMembersOfGroupSecurity = field()
    

@dataclass
class GroupV2GetBannedMembersOfGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
