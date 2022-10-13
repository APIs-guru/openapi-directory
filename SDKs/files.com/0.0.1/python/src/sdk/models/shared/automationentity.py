from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json

class AutomationEntityAutomationEnum(str, Enum):
    CREATE_FOLDER = "create_folder"
    REQUEST_FILE = "request_file"
    REQUEST_MOVE = "request_move"
    COPY_NEWEST_FILE = "copy_newest_file"
    DELETE_FILE = "delete_file"
    COPY_FILE = "copy_file"
    MOVE_FILE = "move_file"

class AutomationEntityTriggerEnum(str, Enum):
    REALTIME = "realtime"
    DAILY = "daily"
    CUSTOM_SCHEDULE = "custom_schedule"
    WEBHOOK = "webhook"
    EMAIL = "email"
    ACTION = "action"


@dataclass_json
@dataclass
class AutomationEntity:
    automation: Optional[AutomationEntityAutomationEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'automation' }})
    destination_replace_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_replace_from' }})
    destination_replace_to: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination_replace_to' }})
    destinations: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destinations' }})
    group_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_ids' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interval: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interval' }})
    next_process_on: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_process_on' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    schedule: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'schedule' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    trigger: Optional[AutomationEntityTriggerEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger' }})
    trigger_action_path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger_action_path' }})
    trigger_actions: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trigger_actions' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    user_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_ids' }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'value' }})
    webhook_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'webhook_url' }})
    
