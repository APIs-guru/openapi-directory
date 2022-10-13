from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class UserEntityAuthenticationMethodEnum(str, Enum):
    PASSWORD = "password"
    UNUSED_FORMER_LDAP = "unused_former_ldap"
    SSO = "sso"
    NONE = "none"
    EMAIL_SIGNUP = "email_signup"

class UserEntityRequire2faEnum(str, Enum):
    USE_SYSTEM_SETTING = "use_system_setting"
    ALWAYS_REQUIRE = "always_require"
    NEVER_REQUIRE = "never_require"

class UserEntitySslRequiredEnum(str, Enum):
    USE_SYSTEM_SETTING = "use_system_setting"
    ALWAYS_REQUIRE = "always_require"
    NEVER_REQUIRE = "never_require"


@dataclass_json
@dataclass
class UserEntity:
    active_2fa: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'active_2fa' }})
    admin_group_ids: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin_group_ids' }})
    allowed_ips: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_ips' }})
    api_keys_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'api_keys_count' }})
    attachments_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'attachments_permission' }})
    authenticate_until: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authenticate_until', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    authentication_method: Optional[UserEntityAuthenticationMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authentication_method' }})
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatar_url' }})
    billing_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'billing_permission' }})
    bypass_inactive_disable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bypass_inactive_disable' }})
    bypass_site_allowed_ips: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bypass_site_allowed_ips' }})
    company: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'company' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    dav_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dav_permission' }})
    disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disabled' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    externally_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'externally_managed' }})
    ftp_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ftp_permission' }})
    group_ids: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group_ids' }})
    header_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'header_text' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    last_login_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_login_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_protocol_cipher: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'last_protocol_cipher' }})
    lockout_expires: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lockout_expires', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notes' }})
    notification_daily_send_time: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notification_daily_send_time' }})
    office_integration_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'office_integration_enabled' }})
    password_set_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password_set_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    password_validity_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password_validity_days' }})
    public_keys_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'public_keys_count' }})
    receive_admin_alerts: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'receive_admin_alerts' }})
    require_2fa: Optional[UserEntityRequire2faEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'require_2fa' }})
    require_password_change: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'require_password_change' }})
    restapi_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restapi_permission' }})
    self_managed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self_managed' }})
    sftp_permission: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sftp_permission' }})
    site_admin: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_admin' }})
    skip_welcome_screen: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'skip_welcome_screen' }})
    ssl_required: Optional[UserEntitySslRequiredEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl_required' }})
    sso_strategy_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sso_strategy_id' }})
    subscribe_to_newsletter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subscribe_to_newsletter' }})
    time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time_zone' }})
    type_of_2fa: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type_of_2fa' }})
    user_root: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_root' }})
    username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'username' }})
    
