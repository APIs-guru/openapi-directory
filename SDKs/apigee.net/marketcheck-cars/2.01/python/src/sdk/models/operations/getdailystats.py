from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetDailyStatsCarTypeEnum(str, Enum):
    NEW = "new"
    USED = "used"

class GetDailyStatsCountryEnum(str, Enum):
    US = "us"
    CA = "ca"


@dataclass
class GetDailyStatsQueryParams:
    api_key: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    car_type: Optional[GetDailyStatsCarTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'car_type', 'style': 'form', 'explode': True }})
    city_state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'city_state', 'style': 'form', 'explode': True }})
    country: Optional[GetDailyStatsCountryEnum] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    taxonomy_vin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'taxonomy_vin', 'style': 'form', 'explode': True }})
    vin: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vin', 'style': 'form', 'explode': True }})
    ymm: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ymm', 'style': 'form', 'explode': True }})
    ymmt: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'ymmt', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDailyStatsRequest:
    query_params: GetDailyStatsQueryParams = field(default=None)
    

@dataclass
class GetDailyStatsResponse:
    content_type: str = field(default=None)
    daily_stats: Optional[shared.DailyStats] = field(default=None)
    error: Optional[shared.Error] = field(default=None)
    status_code: int = field(default=None)
    
