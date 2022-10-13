from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class ActionEntityActionEnum(str, Enum):
    CREATE = "create"
    READ = "read"
    UPDATE = "update"
    DESTROY = "destroy"
    MOVE = "move"
    LOGIN = "login"
    FAILEDLOGIN = "failedlogin"
    COPY = "copy"
    USER_CREATE = "user_create"
    USER_UPDATE = "user_update"
    USER_DESTROY = "user_destroy"
    GROUP_CREATE = "group_create"
    GROUP_UPDATE = "group_update"
    GROUP_DESTROY = "group_destroy"
    PERMISSION_CREATE = "permission_create"
    PERMISSION_DESTROY = "permission_destroy"
    API_KEY_CREATE = "api_key_create"
    API_KEY_UPDATE = "api_key_update"
    API_KEY_DESTROY = "api_key_destroy"

class ActionEntityFailureTypeEnum(str, Enum):
    EXPIRED_TRIAL = "expired_trial"
    ACCOUNT_OVERDUE = "account_overdue"
    LOCKED_OUT = "locked_out"
    IP_MISMATCH = "ip_mismatch"
    PASSWORD_MISMATCH = "password_mismatch"
    SITE_MISMATCH = "site_mismatch"
    USERNAME_NOT_FOUND = "username_not_found"
    NONE = "none"
    NO_FTP_PERMISSION = "no_ftp_permission"
    NO_WEB_PERMISSION = "no_web_permission"
    NO_DIRECTORY = "no_directory"
    ERRNO_ENOENT = "errno_enoent"
    NO_SFTP_PERMISSION = "no_sftp_permission"
    NO_DAV_PERMISSION = "no_dav_permission"
    NO_RESTAPI_PERMISSION = "no_restapi_permission"
    KEY_MISMATCH = "key_mismatch"
    REGION_MISMATCH = "region_mismatch"
    EXPIRED_ACCESS = "expired_access"
    DESKTOP_IP_MISMATCH = "desktop_ip_mismatch"
    DESKTOP_API_KEY_NOT_USED_QUICKLY_ENOUGH = "desktop_api_key_not_used_quickly_enough"
    DISABLED = "disabled"
    COUNTRY_MISMATCH = "country_mismatch"

class ActionEntityInterfaceEnum(str, Enum):
    WEB = "web"
    FTP = "ftp"
    ROBOT = "robot"
    JSAPI = "jsapi"
    WEBDESKTOPAPI = "webdesktopapi"
    SFTP = "sftp"
    DAV = "dav"
    DESKTOP = "desktop"
    RESTAPI = "restapi"
    SCIM = "scim"
    OFFICE = "office"
    MOBILE = "mobile"


@dataclass_json
@dataclass
class ActionEntity:
    action: Optional[ActionEntityActionEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'action' }})
    destination: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'destination' }})
    display: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display' }})
    failure_type: Optional[ActionEntityFailureTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failure_type' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    interface: Optional[ActionEntityInterfaceEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'interface' }})
    ip: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ip' }})
    path: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'path' }})
    source: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'source' }})
    targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targets' }})
    user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_id' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    when: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'when', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
