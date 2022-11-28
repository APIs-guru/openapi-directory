from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUpcomingScheduledCampaignsAndCanvasesQueryParams:
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpcomingScheduledCampaignsAndCanvasesRequest:
    query_params: GetUpcomingScheduledCampaignsAndCanvasesQueryParams = field()
    

@dataclass
class GetUpcomingScheduledCampaignsAndCanvasesResponse:
    content_type: str = field()
    status_code: int = field()
    
