from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class RequestUserAvatarPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    uuid: str = field(metadata={'path_param': { 'field_name': 'uuid', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserAvatarRequest:
    path_params: RequestUserAvatarPathParams = field()
    

@dataclass
class RequestUserAvatarResponse:
    content_type: str = field()
    status_code: int = field()
    avatar: Optional[shared.Avatar] = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
