from dataclasses import dataclass, field
from typing import Optional


@dataclass
class NewsFeedCardAnalyticsQueryParams:
    card_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'card_id', 'style': 'form', 'explode': True }})
    ending_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    length: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    unit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'unit', 'style': 'form', 'explode': True }})
    

@dataclass
class NewsFeedCardAnalyticsRequest:
    query_params: NewsFeedCardAnalyticsQueryParams = field(default=None)
    

@dataclass
class NewsFeedCardAnalyticsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
