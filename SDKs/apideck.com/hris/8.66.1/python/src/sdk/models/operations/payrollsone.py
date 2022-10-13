from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PayrollsOnePathParams:
    payroll_id: str = field(default=None, metadata={'path_param': { 'field_name': 'payroll_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PayrollsOneQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class PayrollsOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class PayrollsOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PayrollsOneRequest:
    path_params: PayrollsOnePathParams = field(default=None)
    query_params: PayrollsOneQueryParams = field(default=None)
    headers: PayrollsOneHeaders = field(default=None)
    security: PayrollsOneSecurity = field(default=None)
    

@dataclass
class PayrollsOneResponse:
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    content_type: str = field(default=None)
    get_payroll_response: Optional[shared.GetPayrollResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    status_code: int = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
