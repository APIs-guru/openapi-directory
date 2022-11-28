from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestUsersQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    include_attributes: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_attributes', 'style': 'form', 'explode': True }})
    include_manageable_rooms: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_manageable_rooms', 'style': 'form', 'explode': True }})
    include_roles: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_roles', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestUsersHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestUsersRequest:
    headers: RequestUsersHeaders = field()
    query_params: RequestUsersQueryParams = field()
    

@dataclass
class RequestUsersResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    user_list: Optional[shared.UserList] = field(default=None)
    
