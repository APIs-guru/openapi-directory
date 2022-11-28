from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestCustomerUsersPathParams:
    customer_id: int = field(metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestCustomerUsersQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    include_attributes: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_attributes', 'style': 'form', 'explode': True }})
    include_manageable_rooms: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_manageable_rooms', 'style': 'form', 'explode': True }})
    include_roles: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'include_roles', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestCustomerUsersHeaders:
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestCustomerUsersRequest:
    headers: RequestCustomerUsersHeaders = field()
    path_params: RequestCustomerUsersPathParams = field()
    query_params: RequestCustomerUsersQueryParams = field()
    

@dataclass
class RequestCustomerUsersResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    user_list: Optional[shared.UserList] = field(default=None)
    
