from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestUserPathParams:
    user_id: int = field(default=None, metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserQueryParams:
    effective_roles: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'effective_roles', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestUserHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserRequest:
    path_params: RequestUserPathParams = field(default=None)
    query_params: RequestUserQueryParams = field(default=None)
    headers: RequestUserHeaders = field(default=None)
    

@dataclass
class RequestUserResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    user_data: Optional[shared.UserData] = field(default=None)
    
