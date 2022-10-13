from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import emailpreferences
from . import userinfo
from . import scheduleoptions

class TransferConfigStateEnum(str, Enum):
    TRANSFER_STATE_UNSPECIFIED = "TRANSFER_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class TransferConfig:
    data_refresh_window_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataRefreshWindowDays' }})
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceId' }})
    dataset_region: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datasetRegion' }})
    destination_dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationDatasetId' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email_preferences: Optional[emailpreferences.EmailPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailPreferences' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_run_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextRunTime' }})
    notification_pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationPubsubTopic' }})
    owner_info: Optional[userinfo.UserInfo] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ownerInfo' }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    schedule_options: Optional[scheduleoptions.ScheduleOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleOptions' }})
    state: Optional[TransferConfigStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
