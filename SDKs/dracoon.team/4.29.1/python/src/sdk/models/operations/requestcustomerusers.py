from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class RequestCustomerUsersPathParams:
    customer_id: int = field(default=None, metadata={'path_param': { 'field_name': 'customer_id', 'style': 'simple', 'explode': False }})
    

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
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format' }})
    x_sds_service_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Service-Token' }})
    

@dataclass
class RequestCustomerUsersRequest:
    path_params: RequestCustomerUsersPathParams = field(default=None)
    query_params: RequestCustomerUsersQueryParams = field(default=None)
    headers: RequestCustomerUsersHeaders = field(default=None)
    

@dataclass
class RequestCustomerUsersResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    user_list: Optional[shared.UserList] = field(default=None)
    
