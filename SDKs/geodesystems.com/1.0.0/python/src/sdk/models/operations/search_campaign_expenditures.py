from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchCampaignExpendituresQueryParams:
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
    search_db_campaign_expenditures_amount: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.amount', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.city', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_committee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.committee', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.location', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_memo_text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.memo_text', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_party: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.party', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_purpose: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.purpose', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_recipient: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.recipient', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.state', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_transaction_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.transaction_date', 'style': 'form', 'explode': True }})
    search_db_campaign_expenditures_zip_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_campaign_expenditures.zip_code', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchCampaignExpendituresRequest:
    query_params: SearchCampaignExpendituresQueryParams = field(default=None)
    

@dataclass
class SearchCampaignExpendituresResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
