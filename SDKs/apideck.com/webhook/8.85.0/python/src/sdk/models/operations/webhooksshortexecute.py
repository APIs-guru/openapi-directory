from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class WebhooksShortExecutePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    service_id: str = field(metadata={'path_param': { 'field_name': 'serviceId', 'style': 'simple', 'explode': False }})
    

@dataclass
class WebhooksShortExecuteQueryParams:
    e: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'e', 'style': 'form', 'explode': True }})
    l_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'l_id', 'style': 'form', 'explode': True }})
    

@dataclass
class WebhooksShortExecuteSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class WebhooksShortExecuteRequest:
    path_params: WebhooksShortExecutePathParams = field()
    query_params: WebhooksShortExecuteQueryParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    security: WebhooksShortExecuteSecurity = field()
    

@dataclass
class WebhooksShortExecuteResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    execute_webhook_response: Optional[shared.ExecuteWebhookResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
