from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class LogsAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    filter: Optional[shared.LogsFilter] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class LogsAllHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    x_apideck_consumer_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-consumer-id' }})
    

@dataclass
class LogsAllSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class LogsAllRequest:
    query_params: LogsAllQueryParams = field(default=None)
    headers: LogsAllHeaders = field(default=None)
    security: LogsAllSecurity = field(default=None)
    

@dataclass
class LogsAllResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_logs_response: Optional[shared.GetLogsResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class LogsAllResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, LogsAllResponses]] = field(default=None)
    status_code: int = field(default=None)
    
