from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMessagesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMessagesIDRequest:
    path_params: GetMessagesIDPathParams = field()
    

@dataclass
class GetMessagesIDResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    message: Optional[shared.Message] = field(default=None)
    
