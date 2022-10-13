from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PostDropletActionPathParams:
    droplet_id: int = field(default=None, metadata={'path_param': { 'field_name': 'droplet_id', 'style': 'simple', 'explode': False }})
    
class PostDropletActionRequestBody1TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclass
class PostDropletActionRequestBody1:
    type: PostDropletActionRequestBody1TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostDropletActionRequestBody2TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclass
class PostDropletActionRequestBody2:
    image: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    type: PostDropletActionRequestBody2TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostDropletActionRequestBody3TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclass
class PostDropletActionRequestBody3:
    disk: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disk' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'size' }})
    type: PostDropletActionRequestBody3TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostDropletActionRequestBody4TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclass
class PostDropletActionRequestBody4:
    image: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'image' }})
    type: PostDropletActionRequestBody4TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostDropletActionRequestBody5TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclass
class PostDropletActionRequestBody5:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: PostDropletActionRequestBody5TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostDropletActionRequestBody6TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclass
class PostDropletActionRequestBody6:
    kernel: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kernel' }})
    type: PostDropletActionRequestBody6TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PostDropletActionRequestBody7TypeEnum(str, Enum):
    ENABLE_BACKUPS = "enable_backups"
    DISABLE_BACKUPS = "disable_backups"
    REBOOT = "reboot"
    POWER_CYCLE = "power_cycle"
    SHUTDOWN = "shutdown"
    POWER_OFF = "power_off"
    POWER_ON = "power_on"
    RESTORE = "restore"
    PASSWORD_RESET = "password_reset"
    RESIZE = "resize"
    REBUILD = "rebuild"
    RENAME = "rename"
    CHANGE_KERNEL = "change_kernel"
    ENABLE_IPV6 = "enable_ipv6"
    SNAPSHOT = "snapshot"


@dataclass_json
@dataclass
class PostDropletActionRequestBody7:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: PostDropletActionRequestBody7TypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PostDropletActionRequest:
    path_params: PostDropletActionPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass_json
@dataclass
class PostDropletAction401ApplicationJSON:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    message: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'request_id' }})
    

@dataclass
class PostDropletActionResponse:
    content_type: str = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    post_droplet_action_201_application_json_any: Optional[Any] = field(default=None)
    post_droplet_action_401_application_json_object: Optional[PostDropletAction401ApplicationJSON] = field(default=None)
    onev2_11_clicks_get_responses_401_content_application_1json_schema: Optional[shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema] = field(default=None)
    
