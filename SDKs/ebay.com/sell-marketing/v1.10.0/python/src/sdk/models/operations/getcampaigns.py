from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
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
    api_auth: shared.SchemeAPIAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetCampaignsRequest:
    query_params: GetCampaignsQueryParams = field()
    security: GetCampaignsSecurity = field()
    

@dataclass
class GetCampaignsResponse:
    content_type: str = field()
    status_code: int = field()
    campaign_paged_collection: Optional[shared.CampaignPagedCollection] = field(default=None)
    
