from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared

class GetSearchMotorcycleAutoCompleteFieldEnum(str, Enum):
    MAKE = "make"
    MODEL = "model"
    TRIM = "trim"
    BODY_TYPE = "body_type"
    VEHICLE_TYPE = "vehicle_type"
    TRANSMISSION = "transmission"
    DRIVETRAIN = "drivetrain"
    FUEL_TYPE = "fuel_type"
    COLOR = "color"
    ENGINE = "engine"
    STATE = "state"
    CITY = "city"

class GetSearchMotorcycleAutoCompleteSortByEnum(str, Enum):
    INDEX = "index"
    COUNT = "count"


@dataclass
class GetSearchMotorcycleAutoCompleteQueryParams:
    field: GetSearchMotorcycleAutoCompleteFieldEnum = field(metadata={'query_param': { 'field_name': 'field', 'style': 'form', 'explode': True }})
    input: str = field(metadata={'query_param': { 'field_name': 'input', 'style': 'form', 'explode': True }})
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    body_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'body_type', 'style': 'form', 'explode': True }})
    city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    drivetrain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'drivetrain', 'style': 'form', 'explode': True }})
    engine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engine', 'style': 'form', 'explode': True }})
    fuel_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fuel_type', 'style': 'form', 'explode': True }})
    ignore_case: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ignore_case', 'style': 'form', 'explode': True }})
    inventory_type: Optional[shared.InventoryTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'inventory_type', 'style': 'form', 'explode': True }})
    make: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    sort_by: Optional[GetSearchMotorcycleAutoCompleteSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    term_counts: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'term_counts', 'style': 'form', 'explode': True }})
    transmission: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transmission', 'style': 'form', 'explode': True }})
    trim: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trim', 'style': 'form', 'explode': True }})
    vehicle_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vehicle_type', 'style': 'form', 'explode': True }})
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchMotorcycleAutoCompleteRequest:
    query_params: GetSearchMotorcycleAutoCompleteQueryParams = field()
    

@dataclass
class GetSearchMotorcycleAutoCompleteResponse:
    content_type: str = field()
    status_code: int = field()
    error: Optional[shared.Error] = field(default=None)
    search_auto_complete_response: Optional[shared.SearchAutoCompleteResponse] = field(default=None)
    
