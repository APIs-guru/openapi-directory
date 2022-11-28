from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class APIResourceCoverageOnePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    resource_id: str = field(metadata={'path_param': { 'field_name': 'resource_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIResourceCoverageOneHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class APIResourceCoverageOneSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class APIResourceCoverageOneRequest:
    headers: APIResourceCoverageOneHeaders = field()
    path_params: APIResourceCoverageOnePathParams = field()
    security: APIResourceCoverageOneSecurity = field()
    

@dataclass
class APIResourceCoverageOneResponse:
    content_type: str = field()
    status_code: int = field()
    get_api_resource_coverage_response: Optional[shared.GetAPIResourceCoverageResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    
