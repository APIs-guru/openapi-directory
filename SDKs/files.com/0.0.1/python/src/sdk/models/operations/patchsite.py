from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PatchSiteRequestBodyIcon128File:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    icon128_file: str = field(metadata={'multipart_form': { 'field_name': 'icon128_file' }})
    

@dataclass
class PatchSiteRequestBodyIcon16File:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    icon16_file: str = field(metadata={'multipart_form': { 'field_name': 'icon16_file' }})
    

@dataclass
class PatchSiteRequestBodyIcon32File:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    icon32_file: str = field(metadata={'multipart_form': { 'field_name': 'icon32_file' }})
    

@dataclass
class PatchSiteRequestBodyIcon48File:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    icon48_file: str = field(metadata={'multipart_form': { 'field_name': 'icon48_file' }})
    

@dataclass
class PatchSiteRequestBodyLogoFile:
    content: bytes = field(metadata={'multipart_form': { 'content': True }})
    logo_file: str = field(metadata={'multipart_form': { 'field_name': 'logo_file' }})
    

@dataclass
class PatchSiteRequestBody:
    allow_bundle_names: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'allow_bundle_names' }})
    allowed_2fa_method_sms: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'allowed_2fa_method_sms' }})
    allowed_2fa_method_totp: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'allowed_2fa_method_totp' }})
    allowed_2fa_method_u2f: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'allowed_2fa_method_u2f' }})
    allowed_2fa_method_yubi: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'allowed_2fa_method_yubi' }})
    allowed_countries: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'allowed_countries' }})
    allowed_ips: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'allowed_ips' }})
    ask_about_overwrites: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'ask_about_overwrites' }})
    bundle_expiration: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'bundle_expiration' }})
    bundle_password_required: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'bundle_password_required' }})
    bundle_require_share_recipient: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'bundle_require_share_recipient' }})
    color2_left: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'color2_left' }})
    color2_link: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'color2_link' }})
    color2_text: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'color2_text' }})
    color2_top: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'color2_top' }})
    color2_top_text: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'color2_top_text' }})
    custom_namespace: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'custom_namespace' }})
    days_to_retain_backups: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'days_to_retain_backups' }})
    default_time_zone: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'default_time_zone' }})
    desktop_app: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'desktop_app' }})
    desktop_app_session_ip_pinning: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'desktop_app_session_ip_pinning' }})
    desktop_app_session_lifetime: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'desktop_app_session_lifetime' }})
    disable_2fa_with_delay: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'disable_2fa_with_delay' }})
    disable_password_reset: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'disable_password_reset' }})
    disable_users_from_inactivity_period_days: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'disable_users_from_inactivity_period_days' }})
    disallowed_countries: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'disallowed_countries' }})
    domain: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'domain' }})
    email: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'email' }})
    folder_permissions_groups_only: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'folder_permissions_groups_only' }})
    icon128_delete: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'icon128_delete' }})
    icon128_file: Optional[PatchSiteRequestBodyIcon128File] = field(default=None, metadata={'multipart_form': { 'file': True }})
    icon16_delete: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'icon16_delete' }})
    icon16_file: Optional[PatchSiteRequestBodyIcon16File] = field(default=None, metadata={'multipart_form': { 'file': True }})
    icon32_delete: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'icon32_delete' }})
    icon32_file: Optional[PatchSiteRequestBodyIcon32File] = field(default=None, metadata={'multipart_form': { 'file': True }})
    icon48_delete: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'icon48_delete' }})
    icon48_file: Optional[PatchSiteRequestBodyIcon48File] = field(default=None, metadata={'multipart_form': { 'file': True }})
    immutable_files: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'immutable_files' }})
    include_password_in_welcome_email: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'include_password_in_welcome_email' }})
    language: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'language' }})
    ldap_base_dn: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_base_dn' }})
    ldap_domain: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_domain' }})
    ldap_enabled: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_enabled' }})
    ldap_group_action: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_group_action' }})
    ldap_group_exclusion: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_group_exclusion' }})
    ldap_group_inclusion: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_group_inclusion' }})
    ldap_host: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_host' }})
    ldap_host_2: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_host_2' }})
    ldap_host_3: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_host_3' }})
    ldap_password_change: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_password_change' }})
    ldap_password_change_confirmation: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_password_change_confirmation' }})
    ldap_port: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_port' }})
    ldap_secure: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_secure' }})
    ldap_type: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_type' }})
    ldap_user_action: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_user_action' }})
    ldap_user_include_groups: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_user_include_groups' }})
    ldap_username: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_username' }})
    ldap_username_field: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'ldap_username_field' }})
    login_help_text: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'login_help_text' }})
    logo_delete: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'logo_delete' }})
    logo_file: Optional[PatchSiteRequestBodyLogoFile] = field(default=None, metadata={'multipart_form': { 'file': True }})
    max_prior_passwords: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'max_prior_passwords' }})
    mobile_app: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'mobile_app' }})
    mobile_app_session_ip_pinning: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'mobile_app_session_ip_pinning' }})
    mobile_app_session_lifetime: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'mobile_app_session_lifetime' }})
    name: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'name' }})
    non_sso_groups_allowed: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'non_sso_groups_allowed' }})
    non_sso_users_allowed: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'non_sso_users_allowed' }})
    office_integration_available: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'office_integration_available' }})
    opt_out_global: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'opt_out_global' }})
    overage_notify: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'overage_notify' }})
    password_min_length: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'password_min_length' }})
    password_require_letter: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'password_require_letter' }})
    password_require_mixed: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'password_require_mixed' }})
    password_require_number: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'password_require_number' }})
    password_require_special: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'password_require_special' }})
    password_require_unbreached: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'password_require_unbreached' }})
    password_requirements_apply_to_bundles: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'password_requirements_apply_to_bundles' }})
    password_validity_days: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'password_validity_days' }})
    reply_to_email: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'reply_to_email' }})
    require_2fa: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'require_2fa' }})
    require_2fa_user_type: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'require_2fa_user_type' }})
    session_expiry: Optional[float] = field(default=None, metadata={'multipart_form': { 'field_name': 'session_expiry' }})
    session_pinned_by_ip: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'session_pinned_by_ip' }})
    sftp_user_root_enabled: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'sftp_user_root_enabled' }})
    sharing_enabled: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'sharing_enabled' }})
    show_request_access_link: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'show_request_access_link' }})
    site_footer: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'site_footer' }})
    site_header: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'site_header' }})
    smtp_address: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'smtp_address' }})
    smtp_authentication: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'smtp_authentication' }})
    smtp_from: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'smtp_from' }})
    smtp_password: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'smtp_password' }})
    smtp_port: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'smtp_port' }})
    smtp_username: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'smtp_username' }})
    ssl_required: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'ssl_required' }})
    subdomain: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'subdomain' }})
    tls_disabled: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'tls_disabled' }})
    use_provided_modified_at: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'use_provided_modified_at' }})
    user_lockout: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_lockout' }})
    user_lockout_lock_period: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_lockout_lock_period' }})
    user_lockout_tries: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_lockout_tries' }})
    user_lockout_within: Optional[int] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_lockout_within' }})
    user_requests_enabled: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'user_requests_enabled' }})
    welcome_custom_text: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'welcome_custom_text' }})
    welcome_email_cc: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'welcome_email_cc' }})
    welcome_email_enabled: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'welcome_email_enabled' }})
    welcome_screen: Optional[str] = field(default=None, metadata={'multipart_form': { 'field_name': 'welcome_screen' }})
    windows_mode_ftp: Optional[bool] = field(default=None, metadata={'multipart_form': { 'field_name': 'windows_mode_ftp' }})
    

@dataclass
class PatchSiteRequest:
    request: Optional[PatchSiteRequestBody] = field(default=None, metadata={'request': { 'media_type': 'multipart/form-data' }})
    

@dataclass
class PatchSiteResponse:
    content_type: str = field()
    status_code: int = field()
    site_entity: Optional[shared.SiteEntity] = field(default=None)
    
