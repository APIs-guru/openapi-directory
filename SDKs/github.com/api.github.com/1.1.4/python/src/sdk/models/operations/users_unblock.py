from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UsersUnblockPathParams:
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class UsersUnblockRequest:
    path_params: UsersUnblockPathParams = field(default=None)
    

@dataclass
class UsersUnblockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
