from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchPropertydbQueryParams:
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
    search_db_propertydb_address: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.address', 'style': 'form', 'explode': True }})
    search_db_propertydb_building_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.building_type', 'style': 'form', 'explode': True }})
    search_db_propertydb_city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.city', 'style': 'form', 'explode': True }})
    search_db_propertydb_house_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.house_size', 'style': 'form', 'explode': True }})
    search_db_propertydb_location: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.location', 'style': 'form', 'explode': True }})
    search_db_propertydb_lot_acres: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.lot_acres', 'style': 'form', 'explode': True }})
    search_db_propertydb_lot_sqft: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.lot_sqft', 'style': 'form', 'explode': True }})
    search_db_propertydb_owner: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.owner', 'style': 'form', 'explode': True }})
    search_db_propertydb_price_sqft: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.price_sqft', 'style': 'form', 'explode': True }})
    search_db_propertydb_property_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.property_id', 'style': 'form', 'explode': True }})
    search_db_propertydb_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.state', 'style': 'form', 'explode': True }})
    search_db_propertydb_value: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'search.db_propertydb.value', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchPropertydbRequest:
    query_params: SearchPropertydbQueryParams = field()
    

@dataclass
class SearchPropertydbResponse:
    content_type: str = field()
    status_code: int = field()
    
