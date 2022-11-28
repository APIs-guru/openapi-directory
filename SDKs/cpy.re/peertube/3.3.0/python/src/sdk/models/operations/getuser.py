from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUserPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserQueryParams:
    with_stats: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'withStats', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserSecurity:
    o_auth2: shared.SchemeOAuth2 = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserRequest:
    path_params: GetUserPathParams = field()
    query_params: GetUserQueryParams = field()
    security: GetUserSecurity = field()
    

@dataclass
class GetUserResponse:
    content_type: str = field()
    status_code: int = field()
    get_user_200_application_json_one_of: Optional[Any] = field(default=None)
    
