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
class ListTimelineEventsQueryParams:
    max_results: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'maxResults', 'style': 'form', 'explode': True }})
    next_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'nextToken', 'style': 'form', 'explode': True }})
    

@dataclass
class ListTimelineEventsHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    
class ListTimelineEventsRequestBodySortByEnum(str, Enum):
    EVENT_TIME = "EVENT_TIME"

class ListTimelineEventsRequestBodySortOrderEnum(str, Enum):
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"


@dataclass_json
@dataclass
class ListTimelineEventsRequestBody:
    incident_record_arn: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('incidentRecordArn') }})
    filters: Optional[List[shared.Filter]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('filters') }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxResults') }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextToken') }})
    sort_by: Optional[ListTimelineEventsRequestBodySortByEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortBy') }})
    sort_order: Optional[ListTimelineEventsRequestBodySortOrderEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortOrder') }})
    

@dataclass
class ListTimelineEventsRequest:
    headers: ListTimelineEventsHeaders = field()
    query_params: ListTimelineEventsQueryParams = field()
    request: ListTimelineEventsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ListTimelineEventsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied_exception: Optional[Any] = field(default=None)
    internal_server_exception: Optional[Any] = field(default=None)
    list_timeline_events_output: Optional[shared.ListTimelineEventsOutput] = field(default=None)
    throttling_exception: Optional[Any] = field(default=None)
    validation_exception: Optional[Any] = field(default=None)
    
