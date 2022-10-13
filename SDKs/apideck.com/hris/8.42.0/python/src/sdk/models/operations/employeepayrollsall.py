from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class EmployeePayrollsAllPathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'employee_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EmployeePayrollsAllQueryParams:
    filter: Optional[shared.PayrollsFilter] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class EmployeePayrollsAllHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class EmployeePayrollsAllSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EmployeePayrollsAllRequest:
    path_params: EmployeePayrollsAllPathParams = field(default=None)
    query_params: EmployeePayrollsAllQueryParams = field(default=None)
    headers: EmployeePayrollsAllHeaders = field(default=None)
    security: EmployeePayrollsAllSecurity = field(default=None)
    

@dataclass
class EmployeePayrollsAllResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_employee_payrolls_response: Optional[shared.GetEmployeePayrollsResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class EmployeePayrollsAllResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, EmployeePayrollsAllResponses]] = field(default=None)
    status_code: int = field(default=None)
    
