from dataclasses import dataclass, field



@dataclass
class GroupV2KickMemberPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2KickMemberSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2KickMemberRequest:
    path_params: GroupV2KickMemberPathParams = field(default=None)
    security: GroupV2KickMemberSecurity = field(default=None)
    

@dataclass
class GroupV2KickMemberResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
