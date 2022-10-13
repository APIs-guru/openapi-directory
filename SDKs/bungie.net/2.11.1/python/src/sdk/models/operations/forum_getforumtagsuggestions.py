from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForumGetForumTagSuggestionsQueryParams:
    partialtag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'partialtag', 'style': 'form', 'explode': True }})
    

@dataclass
class ForumGetForumTagSuggestionsRequest:
    query_params: ForumGetForumTagSuggestionsQueryParams = field(default=None)
    

@dataclass
class ForumGetForumTagSuggestionsResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
