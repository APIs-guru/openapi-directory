from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2GetPotentialGroupsForMemberPathParams:
    filter: int = field(metadata={'path_param': { 'field_name': 'filter', 'style': 'simple', 'explode': False }})
    group_type: int = field(metadata={'path_param': { 'field_name': 'groupType', 'style': 'simple', 'explode': False }})
    membership_id: int = field(metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetPotentialGroupsForMemberRequest:
    path_params: GroupV2GetPotentialGroupsForMemberPathParams = field()
    

@dataclass
class GroupV2GetPotentialGroupsForMemberResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
