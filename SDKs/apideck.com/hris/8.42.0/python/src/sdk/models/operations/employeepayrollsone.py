from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class EmployeePayrollsOnePathParams:
    employee_id: str = field(default=None, metadata={'path_param': { 'field_name': 'employee_id', 'style': 'simple', 'explode': False }})
    payroll_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payroll_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class EmployeePayrollsOneQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class EmployeePayrollsOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class EmployeePayrollsOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class EmployeePayrollsOneRequest:
    path_params: EmployeePayrollsOnePathParams = field(default=None)
    query_params: EmployeePayrollsOneQueryParams = field(default=None)
    headers: EmployeePayrollsOneHeaders = field(default=None)
    security: EmployeePayrollsOneSecurity = field(default=None)
    

@dataclass
class EmployeePayrollsOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_employee_payroll_response: Optional[shared.GetEmployeePayrollResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class EmployeePayrollsOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, EmployeePayrollsOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
