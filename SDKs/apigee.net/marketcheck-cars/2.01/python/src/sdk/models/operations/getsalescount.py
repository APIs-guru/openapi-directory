from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetSalesCountCarTypeEnum(str, Enum):
    NEW = "new"
    USED = "used"

class GetSalesCountCountryEnum(str, Enum):
    US_LOWER = "us"
    CA_LOWER = "ca"
    US_UPPER = "US"
    CA_UPPER = "CA"


@dataclass
class GetSalesCountQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    car_type: Optional[GetSalesCountCarTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'car_type', 'style': 'form', 'explode': True }})
    city_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'city_state', 'style': 'form', 'explode': True }})
    country: Optional[GetSalesCountCountryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    make: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'make', 'style': 'form', 'explode': True }})
    mm: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'mm', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    taxonomy_vin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'taxonomy_vin', 'style': 'form', 'explode': True }})
    vin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    ymm: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ymm', 'style': 'form', 'explode': True }})
    ymmt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ymmt', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSalesCountRequest:
    query_params: GetSalesCountQueryParams = field(default=None)
    

@dataclass
class GetSalesCountResponse:
    content_type: str = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    sales: Optional[shared.Sales] = field(default=None)
    status_code: int = field(default=None)
    
