from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMessagesIDRelatedReceivedMessagesPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMessagesIDRelatedReceivedMessagesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetMessagesIDRelatedReceivedMessagesRequest:
    path_params: GetMessagesIDRelatedReceivedMessagesPathParams = field()
    security: GetMessagesIDRelatedReceivedMessagesSecurity = field()
    

@dataclass
class GetMessagesIDRelatedReceivedMessagesResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    messages: Optional[List[shared.Message]] = field(default=None)
    
