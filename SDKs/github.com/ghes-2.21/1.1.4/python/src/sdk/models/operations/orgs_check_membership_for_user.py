from dataclasses import dataclass, field
from typing import List


@dataclass
class OrgsCheckMembershipForUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsCheckMembershipForUserRequest:
    path_params: OrgsCheckMembershipForUserPathParams = field()
    

@dataclass
class OrgsCheckMembershipForUserResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    
