from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CampaignListQueryParams:
    include_archived: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'include_archived', 'style': 'form', 'explode': True }})
    last_edit_time_gt_: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'last_edit.time[gt]', 'style': 'form', 'explode': True }})
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    sort_direction: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort_direction', 'style': 'form', 'explode': True }})
    

@dataclass
class CampaignListRequest:
    query_params: CampaignListQueryParams = field()
    

@dataclass
class CampaignListResponse:
    content_type: str = field()
    status_code: int = field()
    
