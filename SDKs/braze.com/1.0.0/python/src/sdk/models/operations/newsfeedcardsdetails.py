from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NewsFeedCardsDetailsQueryParams:
    card_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'card_id', 'style': 'form', 'explode': True }})
    

@dataclass
class NewsFeedCardsDetailsRequest:
    query_params: NewsFeedCardsDetailsQueryParams = field(default=None)
    

@dataclass
class NewsFeedCardsDetailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
