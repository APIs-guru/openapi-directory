from dataclasses import dataclass, field



@dataclass
class UserGetBungieNetUserByIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserGetBungieNetUserByIDRequest:
    path_params: UserGetBungieNetUserByIDPathParams = field(default=None)
    

@dataclass
class UserGetBungieNetUserByIDResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
