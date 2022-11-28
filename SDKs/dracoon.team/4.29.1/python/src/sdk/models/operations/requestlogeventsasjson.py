from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from sdk.models import shared


@dataclass
class RequestLogEventsAsJSONQueryParams:
    date_end: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_end', 'style': 'form', 'explode': True }})
    date_start: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'date_start', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    status: Optional[Any] = field(default=None, metadata={'query_param': { 'field_name': 'status', 'style': 'form', 'explode': True }})
    type: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    user_client: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'user_client', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestLogEventsAsJSONHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    x_sds_date_format: Optional[Any] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Date-Format', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestLogEventsAsJSONRequest:
    headers: RequestLogEventsAsJSONHeaders = field()
    query_params: RequestLogEventsAsJSONQueryParams = field()
    

@dataclass
class RequestLogEventsAsJSONResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    log_event_list: Optional[shared.LogEventList] = field(default=None)
    
