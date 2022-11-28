from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ApisOnePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApisOneHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ApisOneSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ApisOneRequest:
    headers: ApisOneHeaders = field()
    path_params: ApisOnePathParams = field()
    security: ApisOneSecurity = field()
    

@dataclass
class ApisOneResponse:
    content_type: str = field()
    status_code: int = field()
    get_api_response: Optional[shared.GetAPIResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    
