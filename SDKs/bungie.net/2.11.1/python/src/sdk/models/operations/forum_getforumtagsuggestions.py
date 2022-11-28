from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ForumGetForumTagSuggestionsQueryParams:
    partialtag: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'partialtag', 'style': 'form', 'explode': True }})
    

@dataclass
class ForumGetForumTagSuggestionsRequest:
    query_params: ForumGetForumTagSuggestionsQueryParams = field()
    

@dataclass
class ForumGetForumTagSuggestionsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
