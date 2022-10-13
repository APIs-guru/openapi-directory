from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass
class GetLatestBaseCurrencyPathParams:
    base_currency: str = field(default=None, metadata={'path_param': { 'field_name': 'base_currency', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetLatestBaseCurrencyRequest:
    path_params: GetLatestBaseCurrencyPathParams = field(default=None)
    

@dataclass_json
@dataclass
class GetLatestBaseCurrency200ApplicationJSON:
    base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'base' }})
    date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    rates: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rates' }})
    time_last_updated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_last_updated' }})
    

@dataclass_json
@dataclass
class GetLatestBaseCurrency404ApplicationJSON:
    error_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error_type' }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'result' }})
    

@dataclass
class GetLatestBaseCurrencyResponse:
    content_type: str = field(default=None)
    get_latest_base_currency_200_application_json_object: Optional[GetLatestBaseCurrency200ApplicationJSON] = field(default=None)
    get_latest_base_currency_404_application_json_object: Optional[GetLatestBaseCurrency404ApplicationJSON] = field(default=None)
    status_code: int = field(default=None)
    
