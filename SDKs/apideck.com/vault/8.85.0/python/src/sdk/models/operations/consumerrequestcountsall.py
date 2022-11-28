from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class ConsumerRequestCountsAllPathParams:
    consumer_id: str = field(metadata={'path_param': { 'field_name': 'consumer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConsumerRequestCountsAllQueryParams:
    end_datetime: str = field(metadata={'query_param': { 'field_name': 'end_datetime', 'style': 'form', 'explode': True }})
    start_datetime: str = field(metadata={'query_param': { 'field_name': 'start_datetime', 'style': 'form', 'explode': True }})
    

@dataclass
class ConsumerRequestCountsAllHeaders:
    x_apideck_app_id: str = field(metadata={'header': { 'field_name': 'x-apideck-app-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConsumerRequestCountsAllSecurity:
    api_key: shared.SchemeAPIKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConsumerRequestCountsAllRequest:
    headers: ConsumerRequestCountsAllHeaders = field()
    path_params: ConsumerRequestCountsAllPathParams = field()
    query_params: ConsumerRequestCountsAllQueryParams = field()
    security: ConsumerRequestCountsAllSecurity = field()
    

@dataclass
class ConsumerRequestCountsAllResponse:
    content_type: str = field()
    status_code: int = field()
    bad_request_response: Optional[shared.BadRequestResponse] = field(default=None)
    consumer_request_counts_in_date_range_response: Optional[shared.ConsumerRequestCountsInDateRangeResponse] = field(default=None)
    not_found_response: Optional[shared.NotFoundResponse] = field(default=None)
    payment_required_response: Optional[shared.PaymentRequiredResponse] = field(default=None)
    unauthorized_response: Optional[shared.UnauthorizedResponse] = field(default=None)
    unexpected_error_response: Optional[shared.UnexpectedErrorResponse] = field(default=None)
    unprocessable_response: Optional[shared.UnprocessableResponse] = field(default=None)
    
