from dataclasses import dataclass, field
from typing import List


@dataclass
class OrgsCheckMembershipForUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsCheckMembershipForUserRequest:
    path_params: OrgsCheckMembershipForUserPathParams = field(default=None)
    

@dataclass
class OrgsCheckMembershipForUserResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
