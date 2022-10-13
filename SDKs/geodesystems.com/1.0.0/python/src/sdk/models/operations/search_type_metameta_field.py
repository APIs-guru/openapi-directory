from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional


@dataclass
class SearchTypeMetametaFieldQueryParams:
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
    search_type_metameta_field_database_column_size: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_field.database_column_size', 'style': 'form', 'explode': True }})
    search_type_metameta_field_datatype: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_field.datatype', 'style': 'form', 'explode': True }})
    search_type_metameta_field_enumeration_values: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_field.enumeration_values', 'style': 'form', 'explode': True }})
    search_type_metameta_field_field_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_field.field_id', 'style': 'form', 'explode': True }})
    search_type_metameta_field_field_index: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_field.field_index', 'style': 'form', 'explode': True }})
    search_type_metameta_field_missing: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_field.missing', 'style': 'form', 'explode': True }})
    search_type_metameta_field_properties: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_field.properties', 'style': 'form', 'explode': True }})
    search_type_metameta_field_unit: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'search.type_metameta_field.unit', 'style': 'form', 'explode': True }})
    skip: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'skip', 'style': 'form', 'explode': True }})
    text: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'text', 'style': 'form', 'explode': True }})
    todate: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'todate', 'style': 'form', 'explode': True }})
    

@dataclass
class SearchTypeMetametaFieldRequest:
    query_params: SearchTypeMetametaFieldQueryParams = field(default=None)
    

@dataclass
class SearchTypeMetametaFieldResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
