from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetTimeSeriesServiceStatisticsQueryParams:
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'NextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTimeSeriesServiceStatisticsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm' }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256' }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential' }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date' }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token' }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature' }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders' }})
    

@dataclass_json
@dataclass
class GetTimeSeriesServiceStatisticsRequestBody:
    end_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EndTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    entity_selector_expression: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EntitySelectorExpression' }})
    forecast_statistics: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ForecastStatistics' }})
    group_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupARN' }})
    group_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'GroupName' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Period' }})
    start_time: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    

@dataclass
class GetTimeSeriesServiceStatisticsRequest:
    query_params: GetTimeSeriesServiceStatisticsQueryParams = field(default=None)
    headers: GetTimeSeriesServiceStatisticsHeaders = field(default=None)
    request: GetTimeSeriesServiceStatisticsRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetTimeSeriesServiceStatisticsResponse:
    content_type: str = field(default=None)
    get_time_series_service_statistics_result: Optional[shared.GetTimeSeriesServiceStatisticsResult] = field(default=None)
    invalid_request_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    throttled_exception: Optional[Any] = field(default=None)
    
