from dataclasses import dataclass, field



@dataclass
class GroupV2UnbanMemberPathParams:
    group_id: int = field(default=None, metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2UnbanMemberSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2UnbanMemberRequest:
    path_params: GroupV2UnbanMemberPathParams = field(default=None)
    security: GroupV2UnbanMemberSecurity = field(default=None)
    

@dataclass
class GroupV2UnbanMemberResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
