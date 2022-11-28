from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMessageReactionsQueryParams:
    message_id: int = field(metadata={'query_param': { 'field_name': 'message_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMessageReactionsRequest:
    query_params: GetMessageReactionsQueryParams = field()
    

@dataclass
class GetMessageReactionsResponse:
    content_type: str = field()
    status_code: int = field()
    message_reaction_entities: Optional[List[shared.MessageReactionEntity]] = field(default=None)
    
