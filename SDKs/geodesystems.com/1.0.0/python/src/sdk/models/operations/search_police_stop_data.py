from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchPoliceStopDataQueryParams:
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
    search_db_police_stop_data_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_police_stop_data.address', 'style': 'form', 'explode': True }})
    search_db_police_stop_data_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_police_stop_data.date', 'style': 'form', 'explode': True }})
    search_db_police_stop_data_ethnicity: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_police_stop_data.ethnicity', 'style': 'form', 'explode': True }})
    search_db_police_stop_data_minutes: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_police_stop_data.minutes', 'style': 'form', 'explode': True }})
    search_db_police_stop_data_race: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_police_stop_data.race', 'style': 'form', 'explode': True }})
    search_db_police_stop_data_resident: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_police_stop_data.resident', 'style': 'form', 'explode': True }})
    search_db_police_stop_data_sex: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_police_stop_data.sex', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchPoliceStopDataRequest:
    query_params: SearchPoliceStopDataQueryParams = field()
    

@dataclass
class SearchPoliceStopDataResponse:
    content_type: str = field()
    status_code: int = field()
    
