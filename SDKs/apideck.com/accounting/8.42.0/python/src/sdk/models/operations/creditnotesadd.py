from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreditNotesAddQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class CreditNotesAddHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class CreditNotesAddSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreditNotesAddRequest:
    query_params: CreditNotesAddQueryParams = field(default=None)
    headers: CreditNotesAddHeaders = field(default=None)
    request: shared.CreditNote = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: CreditNotesAddSecurity = field(default=None)
    

@dataclass
class CreditNotesAddResponses:
    bad_request_response: Optional[Any] = field(default=None)
    create_credit_note_response: Optional[shared.CreateCreditNoteResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class CreditNotesAddResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreditNotesAddResponses]] = field(default=None)
    status_code: int = field(default=None)
    
