from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetHolidaysHolidayIDPathParams:
    holiday_id: int = field(metadata={'path_param': { 'field_name': 'holidayId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHolidaysHolidayIDQueryParams:
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetHolidaysHolidayID200ApplicationJSON:
    holiday: Optional[shared.Holiday] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holiday') }})
    

@dataclass_json
@dataclass
class GetHolidaysHolidayID404ApplicationJSON:
    error: Optional[shared.Error] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass
class GetHolidaysHolidayIDRequest:
    path_params: GetHolidaysHolidayIDPathParams = field()
    query_params: GetHolidaysHolidayIDQueryParams = field()
    

@dataclass
class GetHolidaysHolidayIDResponse:
    content_type: str = field()
    status_code: int = field()
    get_holidays_holiday_id_200_application_json_object: Optional[GetHolidaysHolidayID200ApplicationJSON] = field(default=None)
    get_holidays_holiday_id_404_application_json_object: Optional[GetHolidaysHolidayID404ApplicationJSON] = field(default=None)
    
