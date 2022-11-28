from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ScheduleAPITriggeredCanvasesRequestBodyAudienceAndCustomAttribute:
    comparison: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('comparison') }})
    custom_attribute_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_attribute_name') }})
    value: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    

@dataclass_json
@dataclass
class ScheduleAPITriggeredCanvasesRequestBodyAudienceAnd:
    custom_attribute: Optional[ScheduleAPITriggeredCanvasesRequestBodyAudienceAndCustomAttribute] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_attribute') }})
    

@dataclass_json
@dataclass
class ScheduleAPITriggeredCanvasesRequestBodyAudience:
    and_: Optional[List[ScheduleAPITriggeredCanvasesRequestBodyAudienceAnd]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AND') }})
    

@dataclass_json
@dataclass
class ScheduleAPITriggeredCanvasesRequestBodyRecipients:
    canvas_entry_properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canvas_entry_properties') }})
    external_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('external_user_id') }})
    trigger_properties: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('trigger_properties') }})
    user_alias: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_alias') }})
    

@dataclass_json
@dataclass
class ScheduleAPITriggeredCanvasesRequestBodySchedule:
    at_optimal_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('at_optimal_time') }})
    in_local_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('in_local_time') }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    

@dataclass_json
@dataclass
class ScheduleAPITriggeredCanvasesRequestBody:
    audience: Optional[ScheduleAPITriggeredCanvasesRequestBodyAudience] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('audience') }})
    broadcast: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('broadcast') }})
    canvas_entry_properties: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canvas_entry_properties') }})
    canvas_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('canvas_id') }})
    recipients: Optional[List[ScheduleAPITriggeredCanvasesRequestBodyRecipients]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recipients') }})
    schedule: Optional[ScheduleAPITriggeredCanvasesRequestBodySchedule] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    

@dataclass
class ScheduleAPITriggeredCanvasesRequest:
    request: Optional[ScheduleAPITriggeredCanvasesRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class ScheduleAPITriggeredCanvasesResponse:
    content_type: str = field()
    status_code: int = field()
    
