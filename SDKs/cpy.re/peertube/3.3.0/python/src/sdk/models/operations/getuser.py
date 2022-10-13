from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetUserPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserQueryParams:
    with_stats: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'withStats', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUserSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserRequest:
    path_params: GetUserPathParams = field(default=None)
    query_params: GetUserQueryParams = field(default=None)
    security: GetUserSecurity = field(default=None)
    

@dataclass
class GetUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_user_200_application_json_one_of: Optional[Any] = field(default=None)
    
