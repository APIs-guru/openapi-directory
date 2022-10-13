from dataclasses import dataclass, field



@dataclass
class GroupV2GetPendingMembershipsPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetPendingMembershipsQueryParams:
    currentpage: int = field(default=None, metadata={'query_param': { 'field_name': 'currentpage', 'style': 'form', 'explode': True }})
    

@dataclass
class GroupV2GetPendingMembershipsSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2GetPendingMembershipsRequest:
    path_params: GroupV2GetPendingMembershipsPathParams = field(default=None)
    query_params: GroupV2GetPendingMembershipsQueryParams = field(default=None)
    security: GroupV2GetPendingMembershipsSecurity = field(default=None)
    

@dataclass
class GroupV2GetPendingMembershipsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
