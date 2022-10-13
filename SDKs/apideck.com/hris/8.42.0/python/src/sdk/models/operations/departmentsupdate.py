from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class DepartmentsUpdatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DepartmentsUpdateQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class DepartmentsUpdateHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class DepartmentsUpdateSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DepartmentsUpdateRequest:
    path_params: DepartmentsUpdatePathParams = field(default=None)
    query_params: DepartmentsUpdateQueryParams = field(default=None)
    headers: DepartmentsUpdateHeaders = field(default=None)
    request: shared.Department = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: DepartmentsUpdateSecurity = field(default=None)
    

@dataclass
class DepartmentsUpdateResponses:
    bad_request_response: Optional[Any] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    update_department_response: Optional[shared.UpdateDepartmentResponse] = field(default=None)
    

@dataclass
class DepartmentsUpdateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, DepartmentsUpdateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
