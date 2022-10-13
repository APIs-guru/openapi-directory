from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchCampaignDonorsQueryParams:
    changedate_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'changedate.from', 'style': 'form', 'explode': True }})
    changedate_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'changedate.to', 'style': 'form', 'explode': True }})
    createdate_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdate.from', 'style': 'form', 'explode': True }})
    createdate_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'createdate.to', 'style': 'form', 'explode': True }})
    description: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'description', 'style': 'form', 'explode': True }})
    filesuffix: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filesuffix', 'style': 'form', 'explode': True }})
    fromdate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'fromdate', 'style': 'form', 'explode': True }})
    group: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'group', 'style': 'form', 'explode': True }})
    max: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'max', 'style': 'form', 'explode': True }})
    maxlatitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'maxlatitude', 'style': 'form', 'explode': True }})
    maxlongitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'maxlongitude', 'style': 'form', 'explode': True }})
    minlatitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minlatitude', 'style': 'form', 'explode': True }})
    minlongitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'minlongitude', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    search_db_campaign_donors_amount: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_donors.amount', 'style': 'form', 'explode': True }})
    search_db_campaign_donors_city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_donors.city', 'style': 'form', 'explode': True }})
    search_db_campaign_donors_committee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_donors.committee', 'style': 'form', 'explode': True }})
    search_db_campaign_donors_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_donors.date', 'style': 'form', 'explode': True }})
    search_db_campaign_donors_donor: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_donors.donor', 'style': 'form', 'explode': True }})
    search_db_campaign_donors_employer: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_donors.employer', 'style': 'form', 'explode': True }})
    search_db_campaign_donors_gender: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_donors.gender', 'style': 'form', 'explode': True }})
    search_db_campaign_donors_location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_donors.location', 'style': 'form', 'explode': True }})
    search_db_campaign_donors_occupation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_donors.occupation', 'style': 'form', 'explode': True }})
    search_db_campaign_donors_party: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_donors.party', 'style': 'form', 'explode': True }})
    search_db_campaign_donors_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_donors.state', 'style': 'form', 'explode': True }})
    search_db_campaign_donors_zip_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_donors.zip_code', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchCampaignDonorsRequest:
    query_params: SearchCampaignDonorsQueryParams = field(default=None)
    

@dataclass
class SearchCampaignDonorsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
