from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DepartmentsOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DepartmentsOneQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class DepartmentsOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class DepartmentsOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DepartmentsOneRequest:
    path_params: DepartmentsOnePathParams = field(default=None)
    query_params: DepartmentsOneQueryParams = field(default=None)
    headers: DepartmentsOneHeaders = field(default=None)
    security: DepartmentsOneSecurity = field(default=None)
    

@dataclass
class DepartmentsOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_department_response: Optional[shared.GetDepartmentResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class DepartmentsOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, DepartmentsOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
