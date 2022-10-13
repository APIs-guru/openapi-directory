from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetSpecsCarAutoCompleteFieldEnum(str, Enum):
    MAKE = "make"
    MODEL = "model"
    TRIM = "trim"
    BODY_TYPE = "body_type"
    BODY_SUBTYPE = "body_subtype"
    VEHICLE_TYPE = "vehicle_type"
    TRANSMISSION = "transmission"
    DRIVETRAIN = "drivetrain"
    FUEL_TYPE = "fuel_type"
    ENGINE = "engine"
    ENGINE_SIZE = "engine_size"
    ENGINE_BLOCK = "engine_block"


@dataclass
class GetSpecsCarAutoCompleteQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    body_subtype: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'body_subtype', 'style': 'form', 'explode': True }})
    body_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'body_type', 'style': 'form', 'explode': True }})
    drivetrain: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'drivetrain', 'style': 'form', 'explode': True }})
    engine: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engine', 'style': 'form', 'explode': True }})
    engine_block: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engine_block', 'style': 'form', 'explode': True }})
    engine_size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'engine_size', 'style': 'form', 'explode': True }})
    field: GetSpecsCarAutoCompleteFieldEnum = field(default=None, metadata={'query_param': { 'field_name': 'field', 'style': 'form', 'explode': True }})
    fuel_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'fuel_type', 'style': 'form', 'explode': True }})
    ignore_case: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ignore_case', 'style': 'form', 'explode': True }})
    input: str = field(default=None, metadata={'query_param': { 'field_name': 'input', 'style': 'form', 'explode': True }})
    make: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    model: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'model', 'style': 'form', 'explode': True }})
    transmission: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'transmission', 'style': 'form', 'explode': True }})
    trim: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'trim', 'style': 'form', 'explode': True }})
    vehicle_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vehicle_type', 'style': 'form', 'explode': True }})
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSpecsCarAutoCompleteRequest:
    query_params: GetSpecsCarAutoCompleteQueryParams = field(default=None)
    

@dataclass
class GetSpecsCarAutoCompleteResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    specs_auto_complete_response: Optional[shared.SpecsAutoCompleteResponse] = field(default=None)
    status_code: int = field(default=None)
    
