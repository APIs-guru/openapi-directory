from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import imageentity
from . import imageentity
from . import imageentity
from . import imageentity
from . import imageentity
from . import sessionentity
from . import userentity

class SiteEntityRequire2faUserTypeEnum(str, Enum):
    ALL = "all"
    FOLDER_AND_SITE_ADMINS = "folder_and_site_admins"
    SITE_ADMINS = "site_admins"

class SiteEntityWelcomeScreenEnum(str, Enum):
    ENABLED = "enabled"
    HIDDEN = "hidden"
    DISABLED = "disabled"


@dataclass_json
@dataclass
class SiteEntity:
    admin_user_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'admin_user_id' }})
    allow_bundle_names: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allow_bundle_names' }})
    allowed_2fa_method_sms: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_2fa_method_sms' }})
    allowed_2fa_method_totp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_2fa_method_totp' }})
    allowed_2fa_method_u2f: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_2fa_method_u2f' }})
    allowed_2fa_method_yubi: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_2fa_method_yubi' }})
    allowed_countries: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_countries' }})
    allowed_ips: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowed_ips' }})
    ask_about_overwrites: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ask_about_overwrites' }})
    bundle_expiration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundle_expiration' }})
    bundle_password_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundle_password_required' }})
    bundle_require_share_recipient: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bundle_require_share_recipient' }})
    color2_left: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color2_left' }})
    color2_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color2_link' }})
    color2_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color2_text' }})
    color2_top: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color2_top' }})
    color2_top_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color2_top_text' }})
    contact_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contact_name' }})
    created_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    currency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currency' }})
    custom_namespace: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'custom_namespace' }})
    days_to_retain_backups: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'days_to_retain_backups' }})
    default_time_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'default_time_zone' }})
    desktop_app: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desktop_app' }})
    desktop_app_session_ip_pinning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desktop_app_session_ip_pinning' }})
    desktop_app_session_lifetime: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'desktop_app_session_lifetime' }})
    disable_notifications: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disable_notifications' }})
    disable_password_reset: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disable_password_reset' }})
    disable_users_from_inactivity_period_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disable_users_from_inactivity_period_days' }})
    disallowed_countries: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'disallowed_countries' }})
    domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'domain' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    folder_permissions_groups_only: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'folder_permissions_groups_only' }})
    hipaa: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'hipaa' }})
    icon128: Optional[imageentity.ImageEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon128' }})
    icon16: Optional[imageentity.ImageEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon16' }})
    icon32: Optional[imageentity.ImageEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon32' }})
    icon48: Optional[imageentity.ImageEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'icon48' }})
    immutable_files_set_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'immutable_files_set_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    include_password_in_welcome_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'include_password_in_welcome_email' }})
    language: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'language' }})
    ldap_base_dn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_base_dn' }})
    ldap_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_domain' }})
    ldap_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_enabled' }})
    ldap_group_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_group_action' }})
    ldap_group_exclusion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_group_exclusion' }})
    ldap_group_inclusion: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_group_inclusion' }})
    ldap_host: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_host' }})
    ldap_host_2: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_host_2' }})
    ldap_host_3: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_host_3' }})
    ldap_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_port' }})
    ldap_secure: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_secure' }})
    ldap_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_type' }})
    ldap_user_action: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_user_action' }})
    ldap_user_include_groups: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_user_include_groups' }})
    ldap_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_username' }})
    ldap_username_field: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ldap_username_field' }})
    login_help_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'login_help_text' }})
    logo: Optional[imageentity.ImageEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'logo' }})
    max_prior_passwords: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'max_prior_passwords' }})
    mobile_app: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobile_app' }})
    mobile_app_session_ip_pinning: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobile_app_session_ip_pinning' }})
    mobile_app_session_lifetime: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'mobile_app_session_lifetime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    next_billing_amount: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_billing_amount' }})
    next_billing_date: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'next_billing_date' }})
    non_sso_groups_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'non_sso_groups_allowed' }})
    non_sso_users_allowed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'non_sso_users_allowed' }})
    office_integration_available: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'office_integration_available' }})
    oncehub_link: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oncehub_link' }})
    opt_out_global: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'opt_out_global' }})
    overage_notified_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overage_notified_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    overage_notify: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overage_notify' }})
    overdue: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'overdue' }})
    password_min_length: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password_min_length' }})
    password_require_letter: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password_require_letter' }})
    password_require_mixed: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password_require_mixed' }})
    password_require_number: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password_require_number' }})
    password_require_special: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password_require_special' }})
    password_require_unbreached: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password_require_unbreached' }})
    password_requirements_apply_to_bundles: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password_requirements_apply_to_bundles' }})
    password_validity_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'password_validity_days' }})
    phone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'phone' }})
    reply_to_email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reply_to_email' }})
    require_2fa: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'require_2fa' }})
    require_2fa_stop_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'require_2fa_stop_time', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    require_2fa_user_type: Optional[SiteEntityRequire2faUserTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'require_2fa_user_type' }})
    session: Optional[sessionentity.SessionEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session' }})
    session_expiry: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session_expiry' }})
    session_pinned_by_ip: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'session_pinned_by_ip' }})
    sftp_user_root_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sftp_user_root_enabled' }})
    sharing_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sharing_enabled' }})
    show_request_access_link: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'show_request_access_link' }})
    site_footer: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_footer' }})
    site_header: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_header' }})
    smtp_address: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smtp_address' }})
    smtp_authentication: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smtp_authentication' }})
    smtp_from: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smtp_from' }})
    smtp_port: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smtp_port' }})
    smtp_username: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smtp_username' }})
    ssl_required: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ssl_required' }})
    subdomain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subdomain' }})
    switch_to_plan_date: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'switch_to_plan_date', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    tls_disabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tls_disabled' }})
    trial_days_left: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trial_days_left' }})
    trial_until: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'trial_until', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    updated_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated_at', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    use_provided_modified_at: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'use_provided_modified_at' }})
    user: Optional[userentity.UserEntity] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user' }})
    user_lockout: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_lockout' }})
    user_lockout_lock_period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_lockout_lock_period' }})
    user_lockout_tries: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_lockout_tries' }})
    user_lockout_within: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_lockout_within' }})
    user_requests_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'user_requests_enabled' }})
    welcome_custom_text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'welcome_custom_text' }})
    welcome_email_cc: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'welcome_email_cc' }})
    welcome_email_enabled: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'welcome_email_enabled' }})
    welcome_screen: Optional[SiteEntityWelcomeScreenEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'welcome_screen' }})
    windows_mode_ftp: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'windows_mode_ftp' }})
    
