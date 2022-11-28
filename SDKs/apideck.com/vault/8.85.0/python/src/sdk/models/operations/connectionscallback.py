from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ConnectionsCallbackQueryParams:
    code: str = field(metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    state: str = field(metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class ConnectionsCallbackRequest:
    query_params: ConnectionsCallbackQueryParams = field()
    

@dataclass
class ConnectionsCallbackResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
