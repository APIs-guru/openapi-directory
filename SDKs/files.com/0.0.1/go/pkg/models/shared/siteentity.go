package shared

import (
"time")


type SiteEntityRequire2faUserTypeEnum string

const (
    SiteEntityRequire2faUserTypeEnumAll SiteEntityRequire2faUserTypeEnum = "all"
SiteEntityRequire2faUserTypeEnumFolderAndSiteAdmins SiteEntityRequire2faUserTypeEnum = "folder_and_site_admins"
SiteEntityRequire2faUserTypeEnumSiteAdmins SiteEntityRequire2faUserTypeEnum = "site_admins"
)



type SiteEntityWelcomeScreenEnum string

const (
    SiteEntityWelcomeScreenEnumEnabled SiteEntityWelcomeScreenEnum = "enabled"
SiteEntityWelcomeScreenEnumHidden SiteEntityWelcomeScreenEnum = "hidden"
SiteEntityWelcomeScreenEnumDisabled SiteEntityWelcomeScreenEnum = "disabled"
)


type SiteEntity struct {
    AdminUserID *int32 `json:"admin_user_id,omitempty"`
    AllowBundleNames *bool `json:"allow_bundle_names,omitempty"`
    Allowed2faMethodSms *bool `json:"allowed_2fa_method_sms,omitempty"`
    Allowed2faMethodTotp *bool `json:"allowed_2fa_method_totp,omitempty"`
    Allowed2faMethodU2f *bool `json:"allowed_2fa_method_u2f,omitempty"`
    Allowed2faMethodYubi *bool `json:"allowed_2fa_method_yubi,omitempty"`
    AllowedCountries *string `json:"allowed_countries,omitempty"`
    AllowedIps *string `json:"allowed_ips,omitempty"`
    AskAboutOverwrites *bool `json:"ask_about_overwrites,omitempty"`
    BundleExpiration *int32 `json:"bundle_expiration,omitempty"`
    BundlePasswordRequired *bool `json:"bundle_password_required,omitempty"`
    BundleRequireShareRecipient *bool `json:"bundle_require_share_recipient,omitempty"`
    Color2Left *string `json:"color2_left,omitempty"`
    Color2Link *string `json:"color2_link,omitempty"`
    Color2Text *string `json:"color2_text,omitempty"`
    Color2Top *string `json:"color2_top,omitempty"`
    Color2TopText *string `json:"color2_top_text,omitempty"`
    ContactName *string `json:"contact_name,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Currency *string `json:"currency,omitempty"`
    CustomNamespace *bool `json:"custom_namespace,omitempty"`
    DaysToRetainBackups *int32 `json:"days_to_retain_backups,omitempty"`
    DefaultTimeZone *string `json:"default_time_zone,omitempty"`
    DesktopApp *bool `json:"desktop_app,omitempty"`
    DesktopAppSessionIPPinning *bool `json:"desktop_app_session_ip_pinning,omitempty"`
    DesktopAppSessionLifetime *int32 `json:"desktop_app_session_lifetime,omitempty"`
    DisableNotifications *bool `json:"disable_notifications,omitempty"`
    DisablePasswordReset *bool `json:"disable_password_reset,omitempty"`
    DisableUsersFromInactivityPeriodDays *int32 `json:"disable_users_from_inactivity_period_days,omitempty"`
    DisallowedCountries *string `json:"disallowed_countries,omitempty"`
    Domain *string `json:"domain,omitempty"`
    Email *string `json:"email,omitempty"`
    FolderPermissionsGroupsOnly *bool `json:"folder_permissions_groups_only,omitempty"`
    Hipaa *bool `json:"hipaa,omitempty"`
    Icon128 *ImageEntity `json:"icon128,omitempty"`
    Icon16 *ImageEntity `json:"icon16,omitempty"`
    Icon32 *ImageEntity `json:"icon32,omitempty"`
    Icon48 *ImageEntity `json:"icon48,omitempty"`
    ImmutableFilesSetAt *time.Time `json:"immutable_files_set_at,omitempty"`
    IncludePasswordInWelcomeEmail *bool `json:"include_password_in_welcome_email,omitempty"`
    Language *string `json:"language,omitempty"`
    LdapBaseDn *string `json:"ldap_base_dn,omitempty"`
    LdapDomain *string `json:"ldap_domain,omitempty"`
    LdapEnabled *bool `json:"ldap_enabled,omitempty"`
    LdapGroupAction *string `json:"ldap_group_action,omitempty"`
    LdapGroupExclusion *string `json:"ldap_group_exclusion,omitempty"`
    LdapGroupInclusion *string `json:"ldap_group_inclusion,omitempty"`
    LdapHost *string `json:"ldap_host,omitempty"`
    LdapHost2 *string `json:"ldap_host_2,omitempty"`
    LdapHost3 *string `json:"ldap_host_3,omitempty"`
    LdapPort *int32 `json:"ldap_port,omitempty"`
    LdapSecure *bool `json:"ldap_secure,omitempty"`
    LdapType *string `json:"ldap_type,omitempty"`
    LdapUserAction *string `json:"ldap_user_action,omitempty"`
    LdapUserIncludeGroups *string `json:"ldap_user_include_groups,omitempty"`
    LdapUsername *string `json:"ldap_username,omitempty"`
    LdapUsernameField *string `json:"ldap_username_field,omitempty"`
    LoginHelpText *string `json:"login_help_text,omitempty"`
    Logo *ImageEntity `json:"logo,omitempty"`
    MaxPriorPasswords *int32 `json:"max_prior_passwords,omitempty"`
    MobileApp *bool `json:"mobile_app,omitempty"`
    MobileAppSessionIPPinning *bool `json:"mobile_app_session_ip_pinning,omitempty"`
    MobileAppSessionLifetime *int32 `json:"mobile_app_session_lifetime,omitempty"`
    Name *string `json:"name,omitempty"`
    NextBillingAmount *float64 `json:"next_billing_amount,omitempty"`
    NextBillingDate *string `json:"next_billing_date,omitempty"`
    NonSsoGroupsAllowed *bool `json:"non_sso_groups_allowed,omitempty"`
    NonSsoUsersAllowed *bool `json:"non_sso_users_allowed,omitempty"`
    OfficeIntegrationAvailable *bool `json:"office_integration_available,omitempty"`
    OncehubLink *string `json:"oncehub_link,omitempty"`
    OptOutGlobal *bool `json:"opt_out_global,omitempty"`
    OverageNotifiedAt *time.Time `json:"overage_notified_at,omitempty"`
    OverageNotify *bool `json:"overage_notify,omitempty"`
    Overdue *bool `json:"overdue,omitempty"`
    PasswordMinLength *int32 `json:"password_min_length,omitempty"`
    PasswordRequireLetter *bool `json:"password_require_letter,omitempty"`
    PasswordRequireMixed *bool `json:"password_require_mixed,omitempty"`
    PasswordRequireNumber *bool `json:"password_require_number,omitempty"`
    PasswordRequireSpecial *bool `json:"password_require_special,omitempty"`
    PasswordRequireUnbreached *bool `json:"password_require_unbreached,omitempty"`
    PasswordRequirementsApplyToBundles *bool `json:"password_requirements_apply_to_bundles,omitempty"`
    PasswordValidityDays *int32 `json:"password_validity_days,omitempty"`
    Phone *string `json:"phone,omitempty"`
    ReplyToEmail *string `json:"reply_to_email,omitempty"`
    Require2fa *bool `json:"require_2fa,omitempty"`
    Require2faStopTime *time.Time `json:"require_2fa_stop_time,omitempty"`
    Require2faUserType *SiteEntityRequire2faUserTypeEnum `json:"require_2fa_user_type,omitempty"`
    Session *SessionEntity `json:"session,omitempty"`
    SessionExpiry *float64 `json:"session_expiry,omitempty"`
    SessionPinnedByIP *bool `json:"session_pinned_by_ip,omitempty"`
    SftpUserRootEnabled *bool `json:"sftp_user_root_enabled,omitempty"`
    SharingEnabled *bool `json:"sharing_enabled,omitempty"`
    ShowRequestAccessLink *bool `json:"show_request_access_link,omitempty"`
    SiteFooter *string `json:"site_footer,omitempty"`
    SiteHeader *string `json:"site_header,omitempty"`
    SMTPAddress *string `json:"smtp_address,omitempty"`
    SMTPAuthentication *string `json:"smtp_authentication,omitempty"`
    SMTPFrom *string `json:"smtp_from,omitempty"`
    SMTPPort *int32 `json:"smtp_port,omitempty"`
    SMTPUsername *string `json:"smtp_username,omitempty"`
    SslRequired *bool `json:"ssl_required,omitempty"`
    Subdomain *string `json:"subdomain,omitempty"`
    SwitchToPlanDate *time.Time `json:"switch_to_plan_date,omitempty"`
    TLSDisabled *bool `json:"tls_disabled,omitempty"`
    TrialDaysLeft *int32 `json:"trial_days_left,omitempty"`
    TrialUntil *time.Time `json:"trial_until,omitempty"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    UseProvidedModifiedAt *bool `json:"use_provided_modified_at,omitempty"`
    User *UserEntity `json:"user,omitempty"`
    UserLockout *bool `json:"user_lockout,omitempty"`
    UserLockoutLockPeriod *int32 `json:"user_lockout_lock_period,omitempty"`
    UserLockoutTries *int32 `json:"user_lockout_tries,omitempty"`
    UserLockoutWithin *int32 `json:"user_lockout_within,omitempty"`
    UserRequestsEnabled *bool `json:"user_requests_enabled,omitempty"`
    WelcomeCustomText *string `json:"welcome_custom_text,omitempty"`
    WelcomeEmailCc *string `json:"welcome_email_cc,omitempty"`
    WelcomeEmailEnabled *bool `json:"welcome_email_enabled,omitempty"`
    WelcomeScreen *SiteEntityWelcomeScreenEnum `json:"welcome_screen,omitempty"`
    WindowsModeFtp *bool `json:"windows_mode_ftp,omitempty"`
    
}

