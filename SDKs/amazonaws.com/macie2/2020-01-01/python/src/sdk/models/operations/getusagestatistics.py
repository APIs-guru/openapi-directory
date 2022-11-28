from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from sdk.models import shared


@dataclass
class GetUsageStatisticsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class GetUsageStatisticsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class GetUsageStatisticsRequestBodySortBy:
    r"""GetUsageStatisticsRequestBodySortBy
    Specifies criteria for sorting the results of a query for Amazon Macie account quotas and usage data.
    """
    
    key: Optional[shared.UsageStatisticsSortKeyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    order_by: Optional[shared.OrderByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderBy') }})
    
class GetUsageStatisticsRequestBodyTimeRangeEnum(str, Enum):
    MONTH_TO_DATE = "MONTH_TO_DATE"
    PAST_30_DAYS = "PAST_30_DAYS"


@dataclass_json
@dataclass
class GetUsageStatisticsRequestBody:
    filter_by: Optional[List[shared.UsageStatisticsFilter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filterBy') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    sort_by: Optional[GetUsageStatisticsRequestBodySortBy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortBy') }})
    time_range: Optional[GetUsageStatisticsRequestBodyTimeRangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeRange') }})
    

@dataclass
class GetUsageStatisticsRequest:
    headers: GetUsageStatisticsHeaders = field()
    query_params: GetUsageStatisticsQueryParams = field()
    request: GetUsageStatisticsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class GetUsageStatisticsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    conflict_exception: Optional[Any] = field(default=None)
    get_usage_statistics_response: Optional[shared.GetUsageStatisticsResponse] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    resource_not_found_exception: Optional[Any] = field(default=None)
    service_quota_exceeded_exception: Optional[Any] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
