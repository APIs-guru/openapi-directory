from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserUserIDPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserUserIDRequest:
    path_params: GetUserUserIDPathParams = field(default=None)
    

@dataclass
class GetUserUserIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    invalid_token: Optional[shared.InvalidToken] = field(default=None)
    user_record: Optional[shared.UserRecord] = field(default=None)
    
