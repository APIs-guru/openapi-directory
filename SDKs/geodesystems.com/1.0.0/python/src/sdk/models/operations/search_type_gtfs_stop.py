from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchTypeGtfsStopQueryParams:
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
    search_type_gtfs_stop_location_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_gtfs_stop.location_type', 'style': 'form', 'explode': True }})
    search_type_gtfs_stop_stop_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_gtfs_stop.stop_code', 'style': 'form', 'explode': True }})
    search_type_gtfs_stop_stop_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_gtfs_stop.stop_id', 'style': 'form', 'explode': True }})
    search_type_gtfs_stop_wheelchair_boarding: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_gtfs_stop.wheelchair_boarding', 'style': 'form', 'explode': True }})
    search_type_gtfs_stop_zone_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_gtfs_stop.zone_id', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchTypeGtfsStopRequest:
    query_params: SearchTypeGtfsStopQueryParams = field(default=None)
    

@dataclass
class SearchTypeGtfsStopResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
