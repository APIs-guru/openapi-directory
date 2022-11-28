from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class MessagesGetAllPathParams:
    log_id: str = field(metadata={'path_param': { 'field_name': 'logId', 'style': 'simple', 'explode': False }})
    

@dataclass
class MessagesGetAllQueryParams:
    from_: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'from', 'style': 'form', 'explode': True }})
    include_headers: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'includeHeaders', 'style': 'form', 'explode': True }})
    page_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageIndex', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'pageSize', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class MessagesGetAllRequest:
    path_params: MessagesGetAllPathParams = field()
    query_params: MessagesGetAllQueryParams = field()
    

@dataclass
class MessagesGetAllResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    messages_result: Optional[shared.MessagesResult] = field(default=None)
    
