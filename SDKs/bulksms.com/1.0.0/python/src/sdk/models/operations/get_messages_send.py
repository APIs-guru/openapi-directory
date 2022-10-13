from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMessagesSendQueryParams:
    body: str = field(default=None, metadata={'query_param': { 'field_name': 'body', 'style': 'form', 'explode': True }})
    deduplication_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'deduplication-id', 'style': 'form', 'explode': True }})
    to: str = field(default=None, metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMessagesSendSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetMessagesSendRequest:
    query_params: GetMessagesSendQueryParams = field(default=None)
    security: GetMessagesSendSecurity = field(default=None)
    

@dataclass
class GetMessagesSendResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    messages: Optional[List[shared.Message]] = field(default=None)
    status_code: int = field(default=None)
    
