from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class SessionsCreateHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    

@dataclass
class SessionsCreateSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SessionsCreateRequest:
    headers: SessionsCreateHeaders = field(default=None)
    request: Optional[shared.Session] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: SessionsCreateSecurity = field(default=None)
    

@dataclass
class SessionsCreateResponses:
    bad_request_response: Optional[Any] = field(default=None)
    create_session_response: Optional[shared.CreateSessionResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class SessionsCreateResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, SessionsCreateResponses]] = field(default=None)
    status_code: int = field(default=None)
    
