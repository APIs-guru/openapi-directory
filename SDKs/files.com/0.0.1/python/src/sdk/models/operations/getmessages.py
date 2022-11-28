from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMessagesQueryParams:
    project_id: int = field(metadata={'query_param': { 'field_name': 'project_id', 'style': 'form', 'explode': True }})
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMessagesRequest:
    query_params: GetMessagesQueryParams = field()
    

@dataclass
class GetMessagesResponse:
    content_type: str = field()
    status_code: int = field()
    message_entities: Optional[List[shared.MessageEntity]] = field(default=None)
    
