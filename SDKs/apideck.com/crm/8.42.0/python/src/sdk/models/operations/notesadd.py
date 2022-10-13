from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class NotesAddQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class NotesAddHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class NotesAddSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class NotesAddRequest:
    query_params: NotesAddQueryParams = field(default=None)
    headers: NotesAddHeaders = field(default=None)
    request: shared.Note = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: NotesAddSecurity = field(default=None)
    

@dataclass
class NotesAddResponses:
    bad_request_response: Optional[Any] = field(default=None)
    create_note_response: Optional[shared.CreateNoteResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class NotesAddResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, NotesAddResponses]] = field(default=None)
    status_code: int = field(default=None)
    
