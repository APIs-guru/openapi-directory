from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteUserUserIDPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserUserIDRequest:
    path_params: DeleteUserUserIDPathParams = field(default=None)
    

@dataclass
class DeleteUserUserIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    
