from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetMessageReactionsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetMessageReactionsIDRequest:
    path_params: GetMessageReactionsIDPathParams = field()
    

@dataclass
class GetMessageReactionsIDResponse:
    content_type: str = field()
    status_code: int = field()
    message_reaction_entity: Optional[shared.MessageReactionEntity] = field(default=None)
    
