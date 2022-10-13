from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserRequestsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserRequestsIDRequest:
    path_params: GetUserRequestsIDPathParams = field(default=None)
    

@dataclass
class GetUserRequestsIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    user_request_entity: Optional[shared.UserRequestEntity] = field(default=None)
    
