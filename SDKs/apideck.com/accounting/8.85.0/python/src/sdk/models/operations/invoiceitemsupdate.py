from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class InvoiceItemsUpdatePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvoiceItemsUpdateQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class InvoiceItemsUpdateHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = field(metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class InvoiceItemsUpdateSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class InvoiceItemsUpdateRequest:
    headers: InvoiceItemsUpdateHeaders = field()
    path_params: InvoiceItemsUpdatePathParams = field()
    query_params: InvoiceItemsUpdateQueryParams = field()
    request: shared.InvoiceItemInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: InvoiceItemsUpdateSecurity = field()
    

@dataclass
class InvoiceItemsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    update_invoice_items_response: Optional[shared.UpdateInvoiceItemsResponse] = field(default=None)
    
