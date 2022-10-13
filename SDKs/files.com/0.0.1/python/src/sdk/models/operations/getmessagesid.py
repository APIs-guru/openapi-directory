from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMessagesIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMessagesIDRequest:
    path_params: GetMessagesIDPathParams = field(default=None)
    

@dataclass
class GetMessagesIDResponse:
    content_type: str = field(default=None)
    message_entity: Optional[shared.MessageEntity] = field(default=None)
    status_code: int = field(default=None)
    
