from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTimePeriodsQueryParams:
    end_on: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end_on', 'style': 'form', 'explode': True }})
    limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'limit', 'style': 'form', 'explode': True }})
    offset: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'offset', 'style': 'form', 'explode': True }})
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    start_on: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'start_on', 'style': 'form', 'explode': True }})
    workspace: str = field(default=None, metadata={'query_param': { 'field_name': 'workspace', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTimePeriodsRequest:
    query_params: GetTimePeriodsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetTimePeriods200ApplicationJSON:
    data: Optional[List[shared.TimePeriodCompact]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    

@dataclass
class GetTimePeriodsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_time_periods_200_application_json_object: Optional[GetTimePeriods200ApplicationJSON] = field(default=None)
    
