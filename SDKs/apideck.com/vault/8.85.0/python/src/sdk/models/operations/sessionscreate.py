from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SessionsCreateHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = field(metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionsCreateSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SessionsCreateRequest:
    headers: SessionsCreateHeaders = field()
    security: SessionsCreateSecurity = field()
    request: Optional[shared.Session] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SessionsCreateResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    create_session_response: Optional[shared.CreateSessionResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
