from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ApisOnePathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApisOneHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class ApisOneSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ApisOneRequest:
    path_params: ApisOnePathParams = field(default=None)
    headers: ApisOneHeaders = field(default=None)
    security: ApisOneSecurity = field(default=None)
    

@dataclass
class ApisOneResponses:
    get_api_response: Optional[shared.GetAPIResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    

@dataclass
class ApisOneResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ApisOneResponses]] = field(default=None)
    status_code: int = field(default=None)
    
