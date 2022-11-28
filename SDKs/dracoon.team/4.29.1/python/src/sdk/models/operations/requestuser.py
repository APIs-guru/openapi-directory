from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestUserPathParams:
    user_id: int = field(metadata={'path_param': { 'field_name': 'user_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserQueryParams:
    effective_roles: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'effective_roles', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestUserHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUserRequest:
    headers: RequestUserHeaders = field()
    path_params: RequestUserPathParams = field()
    query_params: RequestUserQueryParams = field()
    

@dataclass
class RequestUserResponseOutput:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    user_data: Optional[shared.UserDataOutput] = field(default=None)
    
