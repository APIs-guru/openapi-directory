from dataclasses import dataclass, field



@dataclass
class UserGetMembershipDataForCurrentUserSecurity:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class UserGetMembershipDataForCurrentUserRequest:
    security: UserGetMembershipDataForCurrentUserSecurity = field(default=None)
    

@dataclass
class UserGetMembershipDataForCurrentUserResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
