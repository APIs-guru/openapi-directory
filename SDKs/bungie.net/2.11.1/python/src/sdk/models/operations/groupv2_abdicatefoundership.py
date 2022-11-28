from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2AbdicateFoundershipPathParams:
    founder_id_new: int = field(metadata={'path_param': { 'field_name': 'founderIdNew', 'style': 'simple', 'explode': False }})
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2AbdicateFoundershipRequest:
    path_params: GroupV2AbdicateFoundershipPathParams = field()
    

@dataclass
class GroupV2AbdicateFoundershipResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
