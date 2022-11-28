from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchBoulderCampaignContributionsQueryParams:
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
    search_db_boulder_campaign_contributions_amended_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.amended_date', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_anonymous: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.anonymous', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_candidate: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.candidate', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.city', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_committee: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.committee', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_committee_num: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.committee_num', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_contribution: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.contribution', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_contribution_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.contribution_type', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_filing_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.filing_date', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_first_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.first_name', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_from_candidate: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.from_candidate', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_last_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.last_name', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_match: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.match', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_official_filing: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.official_filing', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.state', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_street: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.street', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_transaction_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.transaction_date', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.type', 'style': 'form', 'explode': True }})
    search_db_boulder_campaign_contributions_zip: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_campaign_contributions.zip', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchBoulderCampaignContributionsRequest:
    query_params: SearchBoulderCampaignContributionsQueryParams = field()
    

@dataclass
class SearchBoulderCampaignContributionsResponse:
    content_type: str = field()
    status_code: int = field()
    
