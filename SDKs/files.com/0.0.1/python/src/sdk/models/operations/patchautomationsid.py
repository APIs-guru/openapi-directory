from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class PatchAutomationsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    
class PatchAutomationsIDRequestBodyAutomationEnum(str, Enum):
    CREATE_FOLDER = "create_folder"
    REQUEST_FILE = "request_file"
    REQUEST_MOVE = "request_move"
    COPY_NEWEST_FILE = "copy_newest_file"
    DELETE_FILE = "delete_file"
    COPY_FILE = "copy_file"
    MOVE_FILE = "move_file"

class PatchAutomationsIDRequestBodyTriggerEnum(str, Enum):
    REALTIME = "realtime"
    DAILY = "daily"
    CUSTOM_SCHEDULE = "custom_schedule"
    WEBHOOK = "webhook"
    EMAIL = "email"
    ACTION = "action"


@dataclass
class PatchAutomationsIDRequestBody:
    automation: PatchAutomationsIDRequestBodyAutomationEnum = field(default=None, metadata={'multipart_form': { 'field_name': 'automation' }})
    destination: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'destination' }})
    destination_replace_from: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'destination_replace_from' }})
    destination_replace_to: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'destination_replace_to' }})
    destinations: Optional[List[str]] = field(default=None, metadata={'multipart_form': { 'field_name': 'destinations' }})
    group_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'group_ids' }})
    interval: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'interval' }})
    path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'path' }})
    schedule: Optional[dict[str, Any]] = field(default=None, metadata={'multipart_form': { 'field_name': 'schedule', 'json': True }})
    source: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'source' }})
    trigger: Optional[PatchAutomationsIDRequestBodyTriggerEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'trigger' }})
    trigger_action_path: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'trigger_action_path' }})
    trigger_actions: Optional[List[str]] = field(default=None, metadata={'multipart_form': { 'field_name': 'trigger_actions' }})
    user_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_ids' }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'multipart_form': { 'field_name': 'value', 'json': True }})
    

@dataclass
class PatchAutomationsIDRequest:
    path_params: PatchAutomationsIDPathParams = field(default=None)
    request: PatchAutomationsIDRequestBody = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchAutomationsIDResponse:
    automation_entity: Optional[shared.AutomationEntity] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
