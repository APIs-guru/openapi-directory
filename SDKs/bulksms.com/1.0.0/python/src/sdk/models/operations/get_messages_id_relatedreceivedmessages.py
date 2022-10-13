from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMessagesIDRelatedReceivedMessagesPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMessagesIDRelatedReceivedMessagesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetMessagesIDRelatedReceivedMessagesRequest:
    path_params: GetMessagesIDRelatedReceivedMessagesPathParams = field(default=None)
    security: GetMessagesIDRelatedReceivedMessagesSecurity = field(default=None)
    

@dataclass
class GetMessagesIDRelatedReceivedMessagesResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    messages: Optional[List[shared.Message]] = field(default=None)
    status_code: int = field(default=None)
    
