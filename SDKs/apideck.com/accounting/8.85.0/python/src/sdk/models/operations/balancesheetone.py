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
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = field(metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class BalanceSheetOneSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class BalanceSheetOneRequest:
    headers: BalanceSheetOneHeaders = field()
    query_params: BalanceSheetOneQueryParams = field()
    security: BalanceSheetOneSecurity = field()
    

@dataclass
class BalanceSheetOneResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    get_balance_sheet_response: Optional[shared.GetBalanceSheetResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
