from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMessageCommentReactionsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMessageCommentReactionsIDRequest:
    path_params: GetMessageCommentReactionsIDPathParams = field(default=None)
    

@dataclass
class GetMessageCommentReactionsIDResponse:
    content_type: str = field(default=None)
    message_comment_reaction_entity: Optional[shared.MessageCommentReactionEntity] = field(default=None)
    status_code: int = field(default=None)
    
