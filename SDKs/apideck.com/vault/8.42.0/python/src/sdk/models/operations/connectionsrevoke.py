from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ConnectionsRevokePathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application_id', 'style': 'simple', 'explode': False }})
    service_id: str = field(default=None, metadata={'path_param': { 'field_name': 'service_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConnectionsRevokeQueryParams:
    redirect_uri: str = field(default=None, metadata={'query_param': { 'field_name': 'redirect_uri', 'style': 'form', 'explode': True }})
    state: str = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class ConnectionsRevokeRequest:
    path_params: ConnectionsRevokePathParams = field(default=None)
    query_params: ConnectionsRevokeQueryParams = field(default=None)
    

@dataclass
class ConnectionsRevokeResponses:
    bad_request_response: Optional[Any] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ConnectionsRevokeResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ConnectionsRevokeResponses]] = field(default=None)
    status_code: int = field(default=None)
    
