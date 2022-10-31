from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class CreateJourneyPathParams:
    application_id: str = field(default=None, metadata={'path_param': { 'field_name': 'application-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CreateJourneyHeaders:
    x_amz_algorithm: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Algorithm', 'style': 'simple', 'explode': False }})
    x_amz_content_sha256: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Content-Sha256', 'style': 'simple', 'explode': False }})
    x_amz_credential: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Credential', 'style': 'simple', 'explode': False }})
    x_amz_date: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Date', 'style': 'simple', 'explode': False }})
    x_amz_security_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Security-Token', 'style': 'simple', 'explode': False }})
    x_amz_signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-Signature', 'style': 'simple', 'explode': False }})
    x_amz_signed_headers: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Amz-SignedHeaders', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CreateJourneyRequestBodyWriteJourneyRequest:
    activities: Optional[dict[str, shared.Activity]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Activities' }})
    creation_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreationDate' }})
    last_modified_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LastModifiedDate' }})
    limits: Optional[shared.JourneyLimits] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limits' }})
    local_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LocalTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    quiet_time: Optional[shared.QuietTime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'QuietTime' }})
    refresh_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefreshFrequency' }})
    refresh_on_segment_update: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RefreshOnSegmentUpdate' }})
    schedule: Optional[shared.JourneySchedule] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Schedule' }})
    start_activity: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartActivity' }})
    start_condition: Optional[shared.StartCondition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartCondition' }})
    state: Optional[shared.StateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'State' }})
    wait_for_quiet_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WaitForQuietTime' }})
    

@dataclass_json
@dataclass
class CreateJourneyRequestBody:
    write_journey_request: CreateJourneyRequestBodyWriteJourneyRequest = field(default=None, metadata={'dataclasses_json': { 'field_name': 'WriteJourneyRequest' }})
    

@dataclass
class CreateJourneyRequest:
    path_params: CreateJourneyPathParams = field(default=None)
    headers: CreateJourneyHeaders = field(default=None)
    request: CreateJourneyRequestBody = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CreateJourneyResponse:
    bad_request_exception: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    create_journey_response: Optional[shared.CreateJourneyResponse] = field(default=None)
    forbidden_exception: Optional[Any] = field(default=None)
    internal_server_error_exception: Optional[Any] = field(default=None)
    method_not_allowed_exception: Optional[Any] = field(default=None)
    not_found_exception: Optional[Any] = field(default=None)
    payload_too_large_exception: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    too_many_requests_exception: Optional[Any] = field(default=None)
    
