from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NewsFeedCardsDetailsQueryParams:
    card_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'card_id', 'style': 'form', 'explode': True }})
    

@dataclass
class NewsFeedCardsDetailsRequest:
    query_params: NewsFeedCardsDetailsQueryParams = field()
    

@dataclass
class NewsFeedCardsDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    
