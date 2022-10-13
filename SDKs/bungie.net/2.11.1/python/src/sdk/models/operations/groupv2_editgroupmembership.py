from dataclasses import dataclass, field



@dataclass
class GroupV2EditGroupMembershipPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    member_type: int = field(default=None, metadata={'path_param': { 'field_name': 'memberType', 'style': 'simple', 'explode': False }})
    membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2EditGroupMembershipSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2EditGroupMembershipRequest:
    path_params: GroupV2EditGroupMembershipPathParams = field(default=None)
    security: GroupV2EditGroupMembershipSecurity = field(default=None)
    

@dataclass
class GroupV2EditGroupMembershipResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
