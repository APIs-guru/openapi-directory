from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ApisAllQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    filter: Optional[shared.ApisFilter] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'deepObject', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    

@dataclass
class ApisAllHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class ApisAllSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ApisAllRequest:
    query_params: ApisAllQueryParams = field(default=None)
    headers: ApisAllHeaders = field(default=None)
    security: ApisAllSecurity = field(default=None)
    

@dataclass
class ApisAllResponses:
    bad_request_response: Optional[Any] = field(default=None)
    get_apis_response: Optional[shared.GetApisResponse] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    

@dataclass
class ApisAllResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ApisAllResponses]] = field(default=None)
    status_code: int = field(default=None)
    
