from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class TaxRatesDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TaxRatesDeleteQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class TaxRatesDeleteHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class TaxRatesDeleteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TaxRatesDeleteRequest:
    path_params: TaxRatesDeletePathParams = field(default=None)
    query_params: TaxRatesDeleteQueryParams = field(default=None)
    headers: TaxRatesDeleteHeaders = field(default=None)
    security: TaxRatesDeleteSecurity = field(default=None)
    

@dataclass
class TaxRatesDeleteResponses:
    bad_request_response: Optional[Any] = field(default=None)
    delete_tax_rate_response: Optional[shared.DeleteTaxRateResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class TaxRatesDeleteResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, TaxRatesDeleteResponses]] = field(default=None)
    status_code: int = field(default=None)
    
