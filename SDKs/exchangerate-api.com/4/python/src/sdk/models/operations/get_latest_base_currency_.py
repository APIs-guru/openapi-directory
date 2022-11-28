from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class GetLatestBaseCurrencyPathParams:
    base_currency: str = field(metadata={'path_param': { 'field_name': 'base_currency', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetLatestBaseCurrency200ApplicationJSON:
    base: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('base') }})
    date_: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('date') }})
    rates: Optional[dict[str, float]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rates') }})
    time_last_updated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time_last_updated') }})
    

@dataclass_json
@dataclass
class GetLatestBaseCurrency404ApplicationJSON:
    error_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error_type') }})
    result: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('result') }})
    

@dataclass
class GetLatestBaseCurrencyRequest:
    path_params: GetLatestBaseCurrencyPathParams = field()
    

@dataclass
class GetLatestBaseCurrencyResponse:
    content_type: str = field()
    status_code: int = field()
    get_latest_base_currency_200_application_json_object: Optional[GetLatestBaseCurrency200ApplicationJSON] = field(default=None)
    get_latest_base_currency_404_application_json_object: Optional[GetLatestBaseCurrency404ApplicationJSON] = field(default=None)
    
