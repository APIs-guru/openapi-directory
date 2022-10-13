from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class AutoCompleteFieldEnum(str, Enum):
    YMM = "ymm"
    MM = "mm"
    MAKE = "make"
    MODEL = "model"
    TRIM = "trim"
    BODY_TYPE = "body_type"
    BODY_SUBTYPE = "body_subtype"
    VEHICLE_TYPE = "vehicle_type"
    TRANSMISSION = "transmission"
    DRIVETRAIN = "drivetrain"
    FUEL_TYPE = "fuel_type"
    EXTERIOR_COLOR = "exterior_color"
    INTERIOR_COLOR = "interior_color"
    ENGINE = "engine"
    ENGINE_SIZE = "engine_size"
    ENGINE_BLOCK = "engine_block"
    STATE = "state"
    CITY = "city"

class AutoCompleteIncludeNonVinListingsEnum(str, Enum):
    TRUE = "true"
    FALSE = "false"

class AutoCompleteSortByEnum(str, Enum):
    INDEX = "index"
    COUNT = "count"


@dataclass
class AutoCompleteQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    body_subtype: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'body_subtype', 'style': 'form', 'explode': True }})
    body_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'body_type', 'style': 'form', 'explode': True }})
    car_type: Optional[shared.CarTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'car_type', 'style': 'form', 'explode': True }})
    city: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'city', 'style': 'form', 'explode': True }})
    country: Optional[shared.CountryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    drivetrain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'drivetrain', 'style': 'form', 'explode': True }})
    engine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engine', 'style': 'form', 'explode': True }})
    engine_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engine_block', 'style': 'form', 'explode': True }})
    engine_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engine_size', 'style': 'form', 'explode': True }})
    exterior_color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'exterior_color', 'style': 'form', 'explode': True }})
    field: AutoCompleteFieldEnum = field(default=None, metadata={'query_param': { 'field_name': 'field', 'style': 'form', 'explode': True }})
    fuel_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fuel_type', 'style': 'form', 'explode': True }})
    ignore_case: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ignore_case', 'style': 'form', 'explode': True }})
    include_non_vin_listings: Optional[AutoCompleteIncludeNonVinListingsEnum] = field(default=None, metadata={'query_param': { 'field_name': 'include_non_vin_listings', 'style': 'form', 'explode': True }})
    input: str = field(default=None, metadata={'query_param': { 'field_name': 'input', 'style': 'form', 'explode': True }})
    interior_color: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interior_color', 'style': 'form', 'explode': True }})
    make: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    sort_by: Optional[AutoCompleteSortByEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sort_by', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    term_counts: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'term_counts', 'style': 'form', 'explode': True }})
    transmission: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transmission', 'style': 'form', 'explode': True }})
    trim: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trim', 'style': 'form', 'explode': True }})
    vehicle_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vehicle_type', 'style': 'form', 'explode': True }})
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class AutoCompleteRequest:
    query_params: AutoCompleteQueryParams = field(default=None)
    

@dataclass
class AutoCompleteResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    search_auto_complete_response: Optional[shared.SearchAutoCompleteResponse] = field(default=None)
    status_code: int = field(default=None)
    
