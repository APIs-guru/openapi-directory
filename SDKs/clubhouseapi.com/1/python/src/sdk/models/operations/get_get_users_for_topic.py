from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetGetUsersForTopicQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    page_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page_size', 'style': 'form', 'explode': True }})
    topic_id: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'topic_id', 'style': 'form', 'explode': True }})
    

@dataclass
class GetGetUsersForTopicRequest:
    query_params: GetGetUsersForTopicQueryParams = field()
    

@dataclass
class GetGetUsersForTopicResponse:
    content_type: str = field()
    status_code: int = field()
    
