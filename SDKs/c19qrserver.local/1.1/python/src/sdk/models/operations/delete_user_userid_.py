from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class DeleteUserUserIDPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteUserUserIDRequest:
    path_params: DeleteUserUserIDPathParams = field()
    

@dataclass
class DeleteUserUserIDResponse:
    content_type: str = field()
    status_code: int = field()
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    
