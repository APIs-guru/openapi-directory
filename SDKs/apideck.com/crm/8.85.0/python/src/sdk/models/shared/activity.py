from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ActivityShowAsEnum(str, Enum):
    FREE = "free"
    BUSY = "busy"

class ActivityTypeEnum(str, Enum):
    CALL = "call"
    MEETING = "meeting"
    EMAIL = "email"
    NOTE = "note"
    TASK = "task"
    DEADLINE = "deadline"
    SEND_LETTER = "send-letter"
    SEND_QUOTE = "send-quote"
    OTHER = "other"


@dataclass_json
@dataclass
class Activity:
    type: ActivityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    activity_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_date') }})
    activity_datetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_datetime') }})
    all_day_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all_day_event') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_id') }})
    attendees: Optional[List[ActivityAttendee]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees') }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaign_id') }})
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('case_id') }})
    child: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('child') }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_id') }})
    contact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_id') }})
    contract_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contract_id') }})
    created_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_at') }})
    created_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('created_by') }})
    custom_fields: Optional[List[CustomField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    custom_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_object_id') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    done: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('done') }})
    downstream_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('downstream_id') }})
    duration_minutes: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_minutes') }})
    duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_seconds') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    end_datetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_datetime') }})
    event_sub_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_sub_type') }})
    group_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_event') }})
    group_event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_event_type') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    lead_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lead_id') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    location_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_address') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    opportunity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opportunity_id') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_id') }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_id') }})
    recurrent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrent') }})
    reminder_datetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reminder_datetime') }})
    reminder_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reminder_set') }})
    show_as: Optional[ActivityShowAsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_as') }})
    solution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solution_id') }})
    start_datetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_datetime') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    updated_at: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_at') }})
    updated_by: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updated_by') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    video_conference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_conference_id') }})
    video_conference_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_conference_url') }})
    

@dataclass_json
@dataclass
class ActivityInput:
    type: ActivityTypeEnum = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    account_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('account_id') }})
    activity_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_date') }})
    activity_datetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activity_datetime') }})
    all_day_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('all_day_event') }})
    archived: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('archived') }})
    asset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('asset_id') }})
    attendees: Optional[List[ActivityAttendeeInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('attendees') }})
    campaign_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('campaign_id') }})
    case_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('case_id') }})
    child: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('child') }})
    company_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('company_id') }})
    contact_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contact_id') }})
    contract_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contract_id') }})
    custom_fields: Optional[List[CustomField]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_fields') }})
    custom_object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('custom_object_id') }})
    deleted: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deleted') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    done: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('done') }})
    duration_seconds: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration_seconds') }})
    end_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_date') }})
    end_datetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('end_datetime') }})
    event_sub_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('event_sub_type') }})
    group_event: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_event') }})
    group_event_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group_event_type') }})
    lead_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lead_id') }})
    location: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    location_address: Optional[Address] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_address') }})
    note: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    opportunity_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('opportunity_id') }})
    owner_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('owner_id') }})
    private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('private') }})
    product_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('product_id') }})
    recurrent: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recurrent') }})
    reminder_datetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reminder_datetime') }})
    reminder_set: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reminder_set') }})
    show_as: Optional[ActivityShowAsEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('show_as') }})
    solution_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('solution_id') }})
    start_datetime: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start_datetime') }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('title') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('user_id') }})
    video_conference_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_conference_id') }})
    video_conference_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('video_conference_url') }})
    
