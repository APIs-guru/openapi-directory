from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompaniesDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompaniesDeleteQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class CompaniesDeleteHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class CompaniesDeleteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompaniesDeleteRequest:
    path_params: CompaniesDeletePathParams = field(default=None)
    query_params: CompaniesDeleteQueryParams = field(default=None)
    headers: CompaniesDeleteHeaders = field(default=None)
    security: CompaniesDeleteSecurity = field(default=None)
    

@dataclass
class CompaniesDeleteResponses:
    bad_request_response: Optional[Any] = field(default=None)
    delete_hris_company_response: Optional[shared.DeleteHrisCompanyResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class CompaniesDeleteResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CompaniesDeleteResponses]] = field(default=None)
    status_code: int = field(default=None)
    
