from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProfitAndLossOneQueryParams:
    filter: Optional[shared.ProfitAndLossFilter] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class ProfitAndLossOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class ProfitAndLossOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ProfitAndLossOneRequest:
    query_params: ProfitAndLossOneQueryParams = field(default=None)
    headers: ProfitAndLossOneHeaders = field(default=None)
    security: ProfitAndLossOneSecurity = field(default=None)
    

@dataclass
class ProfitAndLossOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_profit_and_loss_response: Optional[shared.GetProfitAndLossResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ProfitAndLossOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ProfitAndLossOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
