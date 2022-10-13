from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ConsumerRequestCountsAllPathParams:
    consumer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'consumer_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ConsumerRequestCountsAllQueryParams:
    end_datetime: str = field(default=None, metadata={'query_param': { 'field_name': 'end_datetime', 'style': 'form', 'explode': True }})
    start_datetime: str = field(default=None, metadata={'query_param': { 'field_name': 'start_datetime', 'style': 'form', 'explode': True }})
    

@dataclass
class ConsumerRequestCountsAllHeaders:
    x_apideck_app_id: str = field(default=None, metadata={'header': { 'field_name': 'x-apideck-app-id' }})
    

@dataclass
class ConsumerRequestCountsAllSecurity:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class ConsumerRequestCountsAllRequest:
    path_params: ConsumerRequestCountsAllPathParams = field(default=None)
    query_params: ConsumerRequestCountsAllQueryParams = field(default=None)
    headers: ConsumerRequestCountsAllHeaders = field(default=None)
    security: ConsumerRequestCountsAllSecurity = field(default=None)
    

@dataclass
class ConsumerRequestCountsAllResponses:
    bad_request_response: Optional[Any] = field(default=None)
    consumer_request_counts_in_date_range_response: Optional[shared.ConsumerRequestCountsInDateRangeResponse] = field(default=None)
    not_found_response: Optional[Any] = field(default=None)
    payment_required_response: Optional[Any] = field(default=None)
    unauthorized_response: Optional[Any] = field(default=None)
    unexpected_error_response: Optional[Any] = field(default=None)
    unprocessable_response: Optional[Any] = field(default=None)
    

@dataclass
class ConsumerRequestCountsAllResponse:
    content_type: str = field(default=None)
    responses: dict[int, dict[str, ConsumerRequestCountsAllResponses]] = field(default=None)
    status_code: int = field(default=None)
    
