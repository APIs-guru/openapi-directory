from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetCampaignsQueryParams:
    campaign_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'campaign_name', 'style': 'form', 'explode': True }})
    campaign_status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'campaign_status', 'style': 'form', 'explode': True }})
    end_date_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date_range', 'style': 'form', 'explode': True }})
    limit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    start_date_range: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date_range', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCampaignsSecurity:
    api_auth: shared.SchemeAPIAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCampaignsRequest:
    query_params: GetCampaignsQueryParams = field(default=None)
    security: GetCampaignsSecurity = field(default=None)
    

@dataclass
class GetCampaignsResponse:
    campaign_paged_collection: Optional[shared.CampaignPagedCollection] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
