from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class TransferConfigStateEnum(str, Enum):
    TRANSFER_STATE_UNSPECIFIED = "TRANSFER_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class TransferConfigInput:
    r"""TransferConfigInput
    Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
    """
    
    data_refresh_window_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRefreshWindowDays') }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    destination_dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDatasetId') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email_preferences: Optional[EmailPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailPreferences') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    notification_pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationPubsubTopic') }})
    owner_info: Optional[UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerInfo') }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    schedule_options: Optional[ScheduleOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleOptions') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    

@dataclass_json
@dataclass
class TransferConfig:
    r"""TransferConfig
    Represents a data transfer configuration. A transfer configuration contains all metadata needed to perform a data transfer. For example, `destination_dataset_id` specifies where data should be stored. When a new transfer configuration is created, the specified `destination_dataset_id` is created when needed and shared with the appropriate data source service account.
    """
    
    data_refresh_window_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataRefreshWindowDays') }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataSourceId') }})
    dataset_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('datasetRegion') }})
    destination_dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationDatasetId') }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('disabled') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    email_preferences: Optional[EmailPreferences] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('emailPreferences') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    next_run_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextRunTime') }})
    notification_pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationPubsubTopic') }})
    owner_info: Optional[UserInfo] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ownerInfo') }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('params') }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('schedule') }})
    schedule_options: Optional[ScheduleOptions] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('scheduleOptions') }})
    state: Optional[TransferConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('userId') }})
    
