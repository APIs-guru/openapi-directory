from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetUserRequestsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserRequestsIDRequest:
    path_params: GetUserRequestsIDPathParams = field()
    

@dataclass
class GetUserRequestsIDResponse:
    content_type: str = field()
    status_code: int = field()
    user_request_entity: Optional[shared.UserRequestEntity] = field(default=None)
    
