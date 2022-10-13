from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class NewsFeedCardsListQueryParams:
    include_archived: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include_archived', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort_direction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    

@dataclass
class NewsFeedCardsListRequest:
    query_params: NewsFeedCardsListQueryParams = field(default=None)
    

@dataclass
class NewsFeedCardsListResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
