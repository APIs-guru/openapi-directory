from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchColoradoWaterRightsQueryParams:
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
    search_db_colorado_water_rights_adjudication_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.adjudication_date', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_appropriation_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.appropriation_date', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_comments: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.comments', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_county: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.county', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_decreed_units: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.decreed_units', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_decreed_uses: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.decreed_uses', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.location', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_more_information: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.more_information', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_net_absolute: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.net_absolute', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_net_apex_absolute: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.net_apex_absolute', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_net_apex_conditional: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.net_apex_conditional', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_net_conditional: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.net_conditional', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_priority_no: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.priority_no', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_seasonal_limits: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.seasonal_limits', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_structure_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.structure_name', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_structure_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.structure_type', 'style': 'form', 'explode': True }})
    search_db_colorado_water_rights_water_source: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_colorado_water_rights.water_source', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchColoradoWaterRightsRequest:
    query_params: SearchColoradoWaterRightsQueryParams = field()
    

@dataclass
class SearchColoradoWaterRightsResponse:
    content_type: str = field()
    status_code: int = field()
    
