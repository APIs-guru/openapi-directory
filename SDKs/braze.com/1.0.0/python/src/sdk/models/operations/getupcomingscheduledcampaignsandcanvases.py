from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetUpcomingScheduledCampaignsAndCanvasesQueryParams:
    end_time: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_time', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUpcomingScheduledCampaignsAndCanvasesRequest:
    query_params: GetUpcomingScheduledCampaignsAndCanvasesQueryParams = field(default=None)
    

@dataclass
class GetUpcomingScheduledCampaignsAndCanvasesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
