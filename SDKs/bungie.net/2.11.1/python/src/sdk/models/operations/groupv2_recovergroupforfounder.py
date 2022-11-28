from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2RecoverGroupForFounderPathParams:
    group_type: int = field(metadata={'path_param': { 'field_name': 'groupType', 'style': 'simple', 'explode': False }})
    membership_id: int = field(metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2RecoverGroupForFounderRequest:
    path_params: GroupV2RecoverGroupForFounderPathParams = field()
    

@dataclass
class GroupV2RecoverGroupForFounderResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
