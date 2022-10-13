from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ConnectionsCallbackQueryParams:
    code: str = field(default=None, metadata={'query_param': { 'field_name': 'code', 'style': 'form', 'explode': True }})
    state: str = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class ConnectionsCallbackRequest:
    query_params: ConnectionsCallbackQueryParams = field(default=None)
    

@dataclass
class ConnectionsCallbackResponses:
    bad_request_response: Optional[Any] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ConnectionsCallbackResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ConnectionsCallbackResponses]] = field(default=None)
    status_code: int = field(default=None)
    
