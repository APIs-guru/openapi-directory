from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class BalanceSheetOneQueryParams:
    filter: Optional[shared.BalanceSheetFilter] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    pass_through: Optional[dict[str, Any]] = field(default=None, metadata={'query_param': { 'field_name': 'pass_through', 'style': 'deepObject', 'explode': True }})
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class BalanceSheetOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class BalanceSheetOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class BalanceSheetOneRequest:
    query_params: BalanceSheetOneQueryParams = field(default=None)
    headers: BalanceSheetOneHeaders = field(default=None)
    security: BalanceSheetOneSecurity = field(default=None)
    

@dataclass
class BalanceSheetOneResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_balance_sheet_response: Optional[shared.GetBalanceSheetResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class BalanceSheetOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, BalanceSheetOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
