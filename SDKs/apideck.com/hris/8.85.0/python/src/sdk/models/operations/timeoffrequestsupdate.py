from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class TimeOffRequestsUpdatePathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TimeOffRequestsUpdateQueryParams:
    raw: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'raw', 'style': 'form', 'explode': True }})
    

@dataclass
class TimeOffRequestsUpdateHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    x_apideck_consumer_id: str = field(metadata={'header': { 'field_name': 'x-apideck-consumer-id', 'style': 'simple', 'explode': False }})
    x_apideck_service_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'x-apideck-service-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class TimeOffRequestsUpdateSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class TimeOffRequestsUpdateRequest:
    headers: TimeOffRequestsUpdateHeaders = field()
    path_params: TimeOffRequestsUpdatePathParams = field()
    query_params: TimeOffRequestsUpdateQueryParams = field()
    request: shared.TimeOffRequestInput = field(metadata={'request': { 'media_type': 'application/json' }})
    security: TimeOffRequestsUpdateSecurity = field()
    

@dataclass
class TimeOffRequestsUpdateResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    update_time_off_request_response: Optional[shared.UpdateTimeOffRequestResponse] = field(default=None)
    
