from dataclasses import dataclass, field



@dataclass
class GroupV2GetGroupsForMemberPathParams:
    filter: int = field(default=None, metadata={'path_param': { 'field_name': 'filter', 'style': 'simple', 'explode': False }})
    group_type: int = field(default=None, metadata={'path_param': { 'field_name': 'groupType', 'style': 'simple', 'explode': False }})
    membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetGroupsForMemberRequest:
    path_params: GroupV2GetGroupsForMemberPathParams = field(default=None)
    

@dataclass
class GroupV2GetGroupsForMemberResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
