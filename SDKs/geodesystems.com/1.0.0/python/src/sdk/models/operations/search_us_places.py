from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchUsPlacesQueryParams:
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
    search_db_us_places_county_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_us_places.county_name', 'style': 'form', 'explode': True }})
    search_db_us_places_elev_in_ft: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_us_places.elev_in_ft', 'style': 'form', 'explode': True }})
    search_db_us_places_feature_class: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_us_places.feature_class', 'style': 'form', 'explode': True }})
    search_db_us_places_feature_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_us_places.feature_name', 'style': 'form', 'explode': True }})
    search_db_us_places_location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_us_places.location', 'style': 'form', 'explode': True }})
    search_db_us_places_state_alpha: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_us_places.state_alpha', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchUsPlacesRequest:
    query_params: SearchUsPlacesQueryParams = field()
    

@dataclass
class SearchUsPlacesResponse:
    content_type: str = field()
    status_code: int = field()
    
