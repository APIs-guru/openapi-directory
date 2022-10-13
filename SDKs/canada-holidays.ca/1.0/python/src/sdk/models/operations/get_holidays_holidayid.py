from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetHolidaysHolidayIDPathParams:
    holiday_id: int = field(default=None, metadata={'path_param': { 'field_name': 'holidayId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetHolidaysHolidayIDQueryParams:
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass
class GetHolidaysHolidayIDRequest:
    path_params: GetHolidaysHolidayIDPathParams = field(default=None)
    query_params: GetHolidaysHolidayIDQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetHolidaysHolidayID200ApplicationJSON:
    holiday: Optional[shared.Holiday] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holiday' }})
    

@dataclass_json
@dataclass
class GetHolidaysHolidayID404ApplicationJSON:
    error: Optional[shared.Error] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    

@dataclass
class GetHolidaysHolidayIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_holidays_holiday_id_200_application_json_object: Optional[GetHolidaysHolidayID200ApplicationJSON] = field(default=None)
    get_holidays_holiday_id_404_application_json_object: Optional[GetHolidaysHolidayID404ApplicationJSON] = field(default=None)
    
