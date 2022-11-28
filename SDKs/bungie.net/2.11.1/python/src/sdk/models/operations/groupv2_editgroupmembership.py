from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GroupV2EditGroupMembershipPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    member_type: int = field(metadata={'path_param': { 'field_name': 'memberType', 'style': 'simple', 'explode': False }})
    membership_id: int = field(metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2EditGroupMembershipSecurity:
    oauth2: shared.SchemeOauth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GroupV2EditGroupMembershipRequest:
    path_params: GroupV2EditGroupMembershipPathParams = field()
    security: GroupV2EditGroupMembershipSecurity = field()
    

@dataclass
class GroupV2EditGroupMembershipResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
