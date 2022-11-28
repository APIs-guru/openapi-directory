from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersUnblockPathParams:
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersUnblockRequest:
    path_params: UsersUnblockPathParams = field()
    

@dataclass
class UsersUnblockResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
