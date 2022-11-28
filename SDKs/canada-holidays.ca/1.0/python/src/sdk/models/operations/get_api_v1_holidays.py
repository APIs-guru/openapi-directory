from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared

class GetAPIV1HolidaysFederalEnum(str, Enum):
    ONE = "1"
    ZERO = "0"
    TRUE = "true"
    FALSE = "false"


@dataclass
class GetAPIV1HolidaysQueryParams:
    federal: Optional[GetAPIV1HolidaysFederalEnum] = field(default=None, metadata={'query_param': { 'field_name': 'federal', 'style': 'form', 'explode': True }})
    year: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'year', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetAPIV1Holidays200ApplicationJSON:
    holidays: Optional[List[shared.Holiday]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('holidays') }})
    

@dataclass
class GetAPIV1HolidaysRequest:
    query_params: GetAPIV1HolidaysQueryParams = field()
    

@dataclass
class GetAPIV1HolidaysResponse:
    content_type: str = field()
    status_code: int = field()
    get_api_v1_holidays_200_application_json_object: Optional[GetAPIV1Holidays200ApplicationJSON] = field(default=None)
    
