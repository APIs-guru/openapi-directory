from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMessagesSendQueryParams:
    body: str = field(metadata={'query_param': { 'field_name': 'body', 'style': 'form', 'explode': True }})
    to: str = field(metadata={'query_param': { 'field_name': 'to', 'style': 'form', 'explode': True }})
    deduplication_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'deduplication-id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMessagesSendSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetMessagesSendRequest:
    query_params: GetMessagesSendQueryParams = field()
    security: GetMessagesSendSecurity = field()
    

@dataclass
class GetMessagesSendResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    messages: Optional[List[shared.Message]] = field(default=None)
    
