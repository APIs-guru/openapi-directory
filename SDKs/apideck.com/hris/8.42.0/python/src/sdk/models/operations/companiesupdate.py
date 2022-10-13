from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CompaniesUpdatePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompaniesUpdateQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class CompaniesUpdateHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class CompaniesUpdateSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompaniesUpdateRequest:
    path_params: CompaniesUpdatePathParams = field(default=None)
    query_params: CompaniesUpdateQueryParams = field(default=None)
    headers: CompaniesUpdateHeaders = field(default=None)
    request: shared.HrisCompany = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CompaniesUpdateSecurity = field(default=None)
    

@dataclass
class CompaniesUpdateResponses:
    bad_request_response: Optional[Any] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    update_hris_company_response: Optional[shared.UpdateHrisCompanyResponse] = field(default=None)
    

@dataclass
class CompaniesUpdateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CompaniesUpdateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
