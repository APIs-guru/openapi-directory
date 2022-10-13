from dataclasses import dataclass, field
from typing import Any,Enum,Optional
from dataclasses_json import dataclass_json
from . import emailpreferences
from . import status

class TransferRunStateEnum(str, Enum):
    TRANSFER_STATE_UNSPECIFIED = "TRANSFER_STATE_UNSPECIFIED"
    PENDING = "PENDING"
    RUNNING = "RUNNING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"
    CANCELLED = "CANCELLED"


@dataclass_json
@dataclass
class TransferRun:
    data_source_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataSourceId' }})
    destination_dataset_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinationDatasetId' }})
    email_preferences: Optional[emailpreferences.EmailPreferences] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'emailPreferences' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    error_status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorStatus' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notification_pubsub_topic: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationPubsubTopic' }})
    params: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'params' }})
    run_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'runTime' }})
    schedule: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    schedule_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'scheduleTime' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    state: Optional[TransferRunStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'userId' }})
    
