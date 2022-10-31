from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTraceSummariesQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTraceSummariesHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetTraceSummariesRequestBodySamplingStrategy:
    name: Optional[shared.SamplingStrategyNameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    value: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Value' }})
    
class GetTraceSummariesRequestBodyTimeRangeTypeEnum(str, Enum):
    TRACE_ID = "TraceId"
    EVENT = "Event"


@dataclass_json
@dataclass
class GetTraceSummariesRequestBody:
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    filter_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'FilterExpression' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    sampling: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Sampling' }})
    sampling_strategy: Optional[GetTraceSummariesRequestBodySamplingStrategy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SamplingStrategy' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    time_range_type: Optional[GetTraceSummariesRequestBodyTimeRangeTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TimeRangeType' }})
    

@dataclass
class GetTraceSummariesRequest:
    query_params: GetTraceSummariesQueryParams = field(default=None)
    headers: GetTraceSummariesHeaders = field(default=None)
    request: GetTraceSummariesRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTraceSummariesResponse:
    content_type: str = field(default=None)
    get_trace_summaries_result: Optional[shared.GetTraceSummariesResult] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttled_exception: Optional[Any] = field(default=None)
    
