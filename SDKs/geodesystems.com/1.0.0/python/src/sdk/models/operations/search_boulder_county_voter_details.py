from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchBoulderCountyVoterDetailsQueryParams:
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
    search_db_boulder_county_voter_details_birth_year: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.birth_year', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_city_ward_district: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.city_ward_district', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_congressional: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.congressional', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_first_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.first_name', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_gender: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.gender', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_last_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.last_name', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_last_updated_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.last_updated_date', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.location', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_mailing_zip_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.mailing_zip_code', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_municipality: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.municipality', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_party: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.party', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_precinct_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.precinct_code', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_registration_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.registration_date', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_residential_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.residential_address', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_residential_city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.residential_city', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_school_district: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.school_district', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_state_house: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.state_house', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_state_senate: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.state_senate', 'style': 'form', 'explode': True }})
    search_db_boulder_county_voter_details_voter_status: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_boulder_county_voter_details.voter_status', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchBoulderCountyVoterDetailsRequest:
    query_params: SearchBoulderCountyVoterDetailsQueryParams = field(default=None)
    

@dataclass
class SearchBoulderCountyVoterDetailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
