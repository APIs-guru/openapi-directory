from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class MerchantsAddQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class MerchantsAddHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = field(metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class MerchantsAddSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class MerchantsAddRequest:
    headers: MerchantsAddHeaders = field()
    query_params: MerchantsAddQueryParams = field()
    request: shared.MerchantInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: MerchantsAddSecurity = field()
    

@dataclass
class MerchantsAddResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    create_merchant_response: Optional[shared.CreateMerchantResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
