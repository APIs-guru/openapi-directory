from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetTimePeriodPathParams:
    time_period_gid: str = field(metadata={'path_param': { 'field_name': 'time_period_gid', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTimePeriodQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    

@dataclass_json
@dataclass
class GetTimePeriod200ApplicationJSON:
    data: Optional[shared.TimePeriodResponse] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('data') }})
    

@dataclass
class GetTimePeriodRequest:
    path_params: GetTimePeriodPathParams = field()
    query_params: GetTimePeriodQueryParams = field()
    

@dataclass
class GetTimePeriodResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    get_time_period_200_application_json_object: Optional[GetTimePeriod200ApplicationJSON] = field(default=None)
    
