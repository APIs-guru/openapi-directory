from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchGazeteerCountiesQueryParams:
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
    search_db_gazeteer_counties_area_land: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_counties.area_land', 'style': 'form', 'explode': True }})
    search_db_gazeteer_counties_area_water: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_counties.area_water', 'style': 'form', 'explode': True }})
    search_db_gazeteer_counties_county_fips: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_counties.county_fips', 'style': 'form', 'explode': True }})
    search_db_gazeteer_counties_county_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_counties.county_name', 'style': 'form', 'explode': True }})
    search_db_gazeteer_counties_full_county_fips: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_counties.full_county_fips', 'style': 'form', 'explode': True }})
    search_db_gazeteer_counties_location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_counties.location', 'style': 'form', 'explode': True }})
    search_db_gazeteer_counties_state_abbreviation: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_counties.state_abbreviation', 'style': 'form', 'explode': True }})
    search_db_gazeteer_counties_state_fips: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_counties.state_fips', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchGazeteerCountiesRequest:
    query_params: SearchGazeteerCountiesQueryParams = field(default=None)
    

@dataclass
class SearchGazeteerCountiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
