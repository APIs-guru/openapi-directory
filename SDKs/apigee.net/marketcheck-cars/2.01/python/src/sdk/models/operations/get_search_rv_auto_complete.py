from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetSearchRvAutoCompleteFieldEnum(str, Enum):
    MAKE = "make"
    MODEL = "model"
    TRIM = "trim"
    CLASS = "class"
    TRANSMISSION = "transmission"
    FUEL_TYPE = "fuel_type"
    EXTERIOR_COLOR = "exterior_color"
    INTERIOR_COLOR = "interior_color"
    ENGINE = "engine"
    STATE = "state"
    CITY = "city"

class GetSearchRvAutoCompleteSortByEnum(str, Enum):
    INDEX = "index"
    COUNT = "count"


@dataclass
class GetSearchRvAutoCompleteQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    body_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'body_type', 'style': 'form', 'explode': True }})
    city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'color', 'style': 'form', 'explode': True }})
    drivetrain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'drivetrain', 'style': 'form', 'explode': True }})
    engine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engine', 'style': 'form', 'explode': True }})
    field: GetSearchRvAutoCompleteFieldEnum = field(default=None, metadata={'query_param': { 'field_name': 'field', 'style': 'form', 'explode': True }})
    fuel_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fuel_type', 'style': 'form', 'explode': True }})
    ignore_case: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ignore_case', 'style': 'form', 'explode': True }})
    input: str = field(default=None, metadata={'query_param': { 'field_name': 'input', 'style': 'form', 'explode': True }})
    inventory_type: Optional[shared.InventoryTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'inventory_type', 'style': 'form', 'explode': True }})
    make: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    sort_by: Optional[GetSearchRvAutoCompleteSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    term_counts: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'term_counts', 'style': 'form', 'explode': True }})
    transmission: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transmission', 'style': 'form', 'explode': True }})
    trim: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trim', 'style': 'form', 'explode': True }})
    vehicle_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vehicle_type', 'style': 'form', 'explode': True }})
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSearchRvAutoCompleteRequest:
    query_params: GetSearchRvAutoCompleteQueryParams = field(default=None)
    

@dataclass
class GetSearchRvAutoCompleteResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    search_auto_complete_response: Optional[shared.SearchAutoCompleteResponse] = field(default=None)
    status_code: int = field(default=None)
    
