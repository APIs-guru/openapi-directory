from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchUfoSightingsQueryParams:
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
    search_db_ufo_sightings_city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.city', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_comments: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.comments', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.country', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_date_posted: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.date_posted', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_datetime: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.datetime', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_duration_hours_min: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.duration_hours_min', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_duration_seconds: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.duration_seconds', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_latitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.latitude', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_longitude: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.longitude', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_shape: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.shape', 'style': 'form', 'explode': True }})
    search_db_ufo_sightings_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_ufo_sightings.state', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchUfoSightingsRequest:
    query_params: SearchUfoSightingsQueryParams = field()
    

@dataclass
class SearchUfoSightingsResponse:
    content_type: str = field()
    status_code: int = field()
    
