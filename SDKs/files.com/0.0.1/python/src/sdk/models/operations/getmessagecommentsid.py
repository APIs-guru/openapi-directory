from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMessageCommentsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMessageCommentsIDRequest:
    path_params: GetMessageCommentsIDPathParams = field(default=None)
    

@dataclass
class GetMessageCommentsIDResponse:
    content_type: str = field(default=None)
    message_comment_entity: Optional[shared.MessageCommentEntity] = field(default=None)
    status_code: int = field(default=None)
    
