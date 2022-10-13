from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompanyInfoOneQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class CompanyInfoOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class CompanyInfoOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyInfoOneRequest:
    query_params: CompanyInfoOneQueryParams = field(default=None)
    headers: CompanyInfoOneHeaders = field(default=None)
    security: CompanyInfoOneSecurity = field(default=None)
    

@dataclass
class CompanyInfoOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_company_info_response: Optional[shared.GetCompanyInfoResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class CompanyInfoOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CompanyInfoOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
