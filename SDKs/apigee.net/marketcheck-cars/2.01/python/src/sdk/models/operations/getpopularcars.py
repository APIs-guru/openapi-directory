from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetPopularCarsCarTypeEnum(str, Enum):
    NEW = "new"
    USED = "used"

class GetPopularCarsCountryEnum(str, Enum):
    US_LOWER = "us"
    CA_LOWER = "ca"
    US_UPPER = "US"
    CA_UPPER = "CA"


@dataclass
class GetPopularCarsQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    car_type: GetPopularCarsCarTypeEnum = field(default=None, metadata={'query_param': { 'field_name': 'car_type', 'style': 'form', 'explode': True }})
    city_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'city_state', 'style': 'form', 'explode': True }})
    country: Optional[GetPopularCarsCountryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    

@dataclass
class GetPopularCarsRequest:
    query_params: GetPopularCarsQueryParams = field(default=None)
    

@dataclass
class GetPopularCarsResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    popular_cars: Optional[shared.PopularCars] = field(default=None)
    status_code: int = field(default=None)
    
