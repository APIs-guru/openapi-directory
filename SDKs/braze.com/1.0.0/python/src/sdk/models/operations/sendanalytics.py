from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SendAnalyticsQueryParams:
    campaign_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'campaign_id', 'style': 'form', 'explode': True }})
    ending_at: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ending_at', 'style': 'form', 'explode': True }})
    length: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'length', 'style': 'form', 'explode': True }})
    send_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'send_id', 'style': 'form', 'explode': True }})
    

@dataclass
class SendAnalyticsRequest:
    query_params: SendAnalyticsQueryParams = field(default=None)
    

@dataclass
class SendAnalyticsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
