from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchGazeteerCensusTractsQueryParams:
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
    search_db_gazeteer_census_tracts_census_tract_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_census_tracts.census_tract_id', 'style': 'form', 'explode': True }})
    search_db_gazeteer_census_tracts_county_fips: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_census_tracts.county_fips', 'style': 'form', 'explode': True }})
    search_db_gazeteer_census_tracts_county_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_census_tracts.county_name', 'style': 'form', 'explode': True }})
    search_db_gazeteer_census_tracts_full_census_tract_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_census_tracts.full_census_tract_id', 'style': 'form', 'explode': True }})
    search_db_gazeteer_census_tracts_land_area: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_census_tracts.land_area', 'style': 'form', 'explode': True }})
    search_db_gazeteer_census_tracts_location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_census_tracts.location', 'style': 'form', 'explode': True }})
    search_db_gazeteer_census_tracts_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_census_tracts.state', 'style': 'form', 'explode': True }})
    search_db_gazeteer_census_tracts_state_fips: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_census_tracts.state_fips', 'style': 'form', 'explode': True }})
    search_db_gazeteer_census_tracts_water_area: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_gazeteer_census_tracts.water_area', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchGazeteerCensusTractsRequest:
    query_params: SearchGazeteerCensusTractsQueryParams = field(default=None)
    

@dataclass
class SearchGazeteerCensusTractsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
