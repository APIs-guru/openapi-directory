from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class CreditNotesDeletePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreditNotesDeleteQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class CreditNotesDeleteHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id' }})
    

@dataclass
class CreditNotesDeleteSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreditNotesDeleteRequest:
    path_params: CreditNotesDeletePathParams = field(default=None)
    query_params: CreditNotesDeleteQueryParams = field(default=None)
    headers: CreditNotesDeleteHeaders = field(default=None)
    security: CreditNotesDeleteSecurity = field(default=None)
    

@dataclass
class CreditNotesDeleteResponses:
    bad_request_response: Optional[Any] = field(default=None)
    delete_credit_note_response: Optional[shared.DeleteCreditNoteResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class CreditNotesDeleteResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, CreditNotesDeleteResponses]] = field(default=None)
    status_code: int = field(default=None)
    
