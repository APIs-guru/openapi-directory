from dataclasses import dataclass, field



@dataclass
class UserGetMembershipDataByIDPathParams:
    membership_id: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipId', 'style': 'simple', 'explode': False }})
    membership_type: int = field(default=None, metadata={'path_param': { 'field_name': 'membershipType', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserGetMembershipDataByIDRequest:
    path_params: UserGetMembershipDataByIDPathParams = field(default=None)
    

@dataclass
class UserGetMembershipDataByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
