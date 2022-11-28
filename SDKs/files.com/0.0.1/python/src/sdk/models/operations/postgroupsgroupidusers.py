from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PostGroupsGroupIDUsersPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'group_id', 'style': 'simple', 'explode': False }})
    
class PostGroupsGroupIDUsersRequestBodyAuthenticationMethodEnum(str, Enum):
    PASSWORD = "password"
    UNUSED_FORMER_LDAP = "unused_former_ldap"
    SSO = "sso"
    NONE = "none"
    EMAIL_SIGNUP = "email_signup"


@dataclass
class PostGroupsGroupIDUsersRequestBodyAvatarFile:
    avatar_file: str = field(metadata={'multipart_form': { 'field_name': 'avatar_file' }})
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    
class PostGroupsGroupIDUsersRequestBodyRequire2faEnum(str, Enum):
    USE_SYSTEM_SETTING = "use_system_setting"
    ALWAYS_REQUIRE = "always_require"
    NEVER_REQUIRE = "never_require"

class PostGroupsGroupIDUsersRequestBodySslRequiredEnum(str, Enum):
    USE_SYSTEM_SETTING = "use_system_setting"
    ALWAYS_REQUIRE = "always_require"
    NEVER_REQUIRE = "never_require"


@dataclass
class PostGroupsGroupIDUsersRequestBody:
    allowed_ips: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'allowed_ips' }})
    announcements_read: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'announcements_read' }})
    attachments_permission: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'attachments_permission' }})
    authenticate_until: Optional[datetime] = field(default=None, metadata={'multipart_form': { 'field_name': 'authenticate_until' }})
    authentication_method: Optional[PostGroupsGroupIDUsersRequestBodyAuthenticationMethodEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'authentication_method' }})
    avatar_delete: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'avatar_delete' }})
    avatar_file: Optional[PostGroupsGroupIDUsersRequestBodyAvatarFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    billing_permission: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'billing_permission' }})
    bypass_inactive_disable: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'bypass_inactive_disable' }})
    bypass_site_allowed_ips: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'bypass_site_allowed_ips' }})
    change_password: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'change_password' }})
    change_password_confirmation: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'change_password_confirmation' }})
    company: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'company' }})
    dav_permission: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'dav_permission' }})
    disabled: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'disabled' }})
    email: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'email' }})
    ftp_permission: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'ftp_permission' }})
    grant_permission: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'grant_permission' }})
    group_ids: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'group_ids' }})
    header_text: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'header_text' }})
    language: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'language' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    notes: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'notes' }})
    notification_daily_send_time: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'notification_daily_send_time' }})
    office_integration_enabled: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'office_integration_enabled' }})
    password: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'password' }})
    password_confirmation: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'password_confirmation' }})
    password_validity_days: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'password_validity_days' }})
    receive_admin_alerts: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'receive_admin_alerts' }})
    require_2fa: Optional[PostGroupsGroupIDUsersRequestBodyRequire2faEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'require_2fa' }})
    require_password_change: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'require_password_change' }})
    restapi_permission: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'restapi_permission' }})
    self_managed: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'self_managed' }})
    sftp_permission: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'sftp_permission' }})
    site_admin: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'site_admin' }})
    skip_welcome_screen: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'skip_welcome_screen' }})
    ssl_required: Optional[PostGroupsGroupIDUsersRequestBodySslRequiredEnum] = field(default=None, metadata={'multipart_form': { 'field_name': 'ssl_required' }})
    sso_strategy_id: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'sso_strategy_id' }})
    subscribe_to_newsletter: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'subscribe_to_newsletter' }})
    time_zone: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'time_zone' }})
    user_root: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_root' }})
    username: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'username' }})
    

@dataclass
class PostGroupsGroupIDUsersRequest:
    path_params: PostGroupsGroupIDUsersPathParams = field()
    request: Optional[PostGroupsGroupIDUsersRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PostGroupsGroupIDUsersResponse:
    content_type: str = field()
    status_code: int = field()
    user_entity: Optional[shared.UserEntity] = field(default=None)
    
