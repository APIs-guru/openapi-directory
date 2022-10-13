from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
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
    

@dataclass
class GetAPIV1HolidaysRequest:
    query_params: GetAPIV1HolidaysQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetAPIV1Holidays200ApplicationJSON:
    holidays: Optional[List[shared.Holiday]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'holidays' }})
    

@dataclass
class GetAPIV1HolidaysResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_api_v1_holidays_200_application_json_object: Optional[GetAPIV1Holidays200ApplicationJSON] = field(default=None)
    
