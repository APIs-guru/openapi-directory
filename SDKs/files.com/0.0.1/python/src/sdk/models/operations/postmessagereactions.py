from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostMessageReactionsRequestBody:
    emoji: str = field(metadata={'multipart_form': { 'field_name': 'emoji' }})
    user_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_id' }})
    

@dataclass
class PostMessageReactionsRequest:
    request: Optional[PostMessageReactionsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostMessageReactionsResponse:
    content_type: str = field()
    status_code: int = field()
    message_reaction_entity: Optional[shared.MessageReactionEntity] = field(default=None)
    
