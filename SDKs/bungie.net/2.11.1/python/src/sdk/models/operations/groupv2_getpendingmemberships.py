from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupV2GetPendingMembershipsPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetPendingMembershipsQueryParams:
    currentpage: int = field(metadata={'query_param': { 'field_name': 'currentpage', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupV2GetPendingMembershipsSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2GetPendingMembershipsRequest:
    path_params: GroupV2GetPendingMembershipsPathParams = field()
    query_params: GroupV2GetPendingMembershipsQueryParams = field()
    security: GroupV2GetPendingMembershipsSecurity = field()
    

@dataclass
class GroupV2GetPendingMembershipsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
