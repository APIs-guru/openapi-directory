from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostMessagesQueryParams:
    auto_unicode: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'auto-unicode', 'style': 'form', 'explode': True }})
    deduplication_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'deduplication-id', 'style': 'form', 'explode': True }})
    schedule_date: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'schedule-date', 'style': 'form', 'explode': True }})
    schedule_description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'schedule-description', 'style': 'form', 'explode': True }})
    

@dataclass
class PostMessagesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostMessagesRequest:
    query_params: PostMessagesQueryParams = field(default=None)
    request: List[shared.SubmissionEntry] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostMessagesSecurity = field(default=None)
    

@dataclass
class PostMessagesResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    messages: Optional[List[shared.Message]] = field(default=None)
    status_code: int = field(default=None)
    
