from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetMessageCommentsQueryParams:
    cursor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'cursor', 'style': 'form', 'explode': True }})
    message_id: int = field(default=None, metadata={'query_param': { 'field_name': 'message_id', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    user_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'user_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMessageCommentsRequest:
    query_params: GetMessageCommentsQueryParams = field(default=None)
    

@dataclass
class GetMessageCommentsResponse:
    content_type: str = field(default=None)
    message_comment_entities: Optional[List[shared.MessageCommentEntity]] = field(default=None)
    status_code: int = field(default=None)
    
