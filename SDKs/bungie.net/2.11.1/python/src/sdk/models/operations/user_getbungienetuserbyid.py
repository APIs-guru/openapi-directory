from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UserGetBungieNetUserByIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class UserGetBungieNetUserByIDRequest:
    path_params: UserGetBungieNetUserByIDPathParams = field()
    

@dataclass
class UserGetBungieNetUserByIDResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
