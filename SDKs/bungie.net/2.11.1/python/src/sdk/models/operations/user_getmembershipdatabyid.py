from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserGetMembershipDataByIDPathParams:
    membership_id: int = field(metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserGetMembershipDataByIDRequest:
    path_params: UserGetMembershipDataByIDPathParams = field()
    

@dataclass
class UserGetMembershipDataByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
