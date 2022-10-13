package shared

import (
	"time"
)

type SiteEntityRequire2faUserTypeEnum string

const (
	SiteEntityRequire2faUserTypeEnumAll                 SiteEntityRequire2faUserTypeEnum = "all"
	SiteEntityRequire2faUserTypeEnumFolderAndSiteAdmins SiteEntityRequire2faUserTypeEnum = "folder_and_site_admins"
	SiteEntityRequire2faUserTypeEnumSiteAdmins          SiteEntityRequire2faUserTypeEnum = "site_admins"
)

type SiteEntityWelcomeScreenEnum string

const (
	SiteEntityWelcomeScreenEnumEnabled  SiteEntityWelcomeScreenEnum = "enabled"
	SiteEntityWelcomeScreenEnumHidden   SiteEntityWelcomeScreenEnum = "hidden"
	SiteEntityWelcomeScreenEnumDisabled SiteEntityWelcomeScreenEnum = "disabled"
)

type SiteEntity struct {
	AdminUserID                          *int32                            `json:"admin_user_id"`
	AllowBundleNames                     *bool                             `json:"allow_bundle_names"`
	Allowed2faMethodSms                  *bool                             `json:"allowed_2fa_method_sms"`
	Allowed2faMethodTotp                 *bool                             `json:"allowed_2fa_method_totp"`
	Allowed2faMethodU2f                  *bool                             `json:"allowed_2fa_method_u2f"`
	Allowed2faMethodYubi                 *bool                             `json:"allowed_2fa_method_yubi"`
	AllowedCountries                     *string                           `json:"allowed_countries"`
	AllowedIps                           *string                           `json:"allowed_ips"`
	AskAboutOverwrites                   *bool                             `json:"ask_about_overwrites"`
	BundleExpiration                     *int32                            `json:"bundle_expiration"`
	BundlePasswordRequired               *bool                             `json:"bundle_password_required"`
	BundleRequireShareRecipient          *bool                             `json:"bundle_require_share_recipient"`
	Color2Left                           *string                           `json:"color2_left"`
	Color2Link                           *string                           `json:"color2_link"`
	Color2Text                           *string                           `json:"color2_text"`
	Color2Top                            *string                           `json:"color2_top"`
	Color2TopText                        *string                           `json:"color2_top_text"`
	ContactName                          *string                           `json:"contact_name"`
	CreatedAt                            *time.Time                        `json:"created_at"`
	Currency                             *string                           `json:"currency"`
	CustomNamespace                      *bool                             `json:"custom_namespace"`
	DaysToRetainBackups                  *int32                            `json:"days_to_retain_backups"`
	DefaultTimeZone                      *string                           `json:"default_time_zone"`
	DesktopApp                           *bool                             `json:"desktop_app"`
	DesktopAppSessionIPPinning           *bool                             `json:"desktop_app_session_ip_pinning"`
	DesktopAppSessionLifetime            *int32                            `json:"desktop_app_session_lifetime"`
	DisableNotifications                 *bool                             `json:"disable_notifications"`
	DisablePasswordReset                 *bool                             `json:"disable_password_reset"`
	DisableUsersFromInactivityPeriodDays *int32                            `json:"disable_users_from_inactivity_period_days"`
	DisallowedCountries                  *string                           `json:"disallowed_countries"`
	Domain                               *string                           `json:"domain"`
	Email                                *string                           `json:"email"`
	FolderPermissionsGroupsOnly          *bool                             `json:"folder_permissions_groups_only"`
	Hipaa                                *bool                             `json:"hipaa"`
	Icon128                              *ImageEntity                      `json:"icon128"`
	Icon16                               *ImageEntity                      `json:"icon16"`
	Icon32                               *ImageEntity                      `json:"icon32"`
	Icon48                               *ImageEntity                      `json:"icon48"`
	ImmutableFilesSetAt                  *time.Time                        `json:"immutable_files_set_at"`
	IncludePasswordInWelcomeEmail        *bool                             `json:"include_password_in_welcome_email"`
	Language                             *string                           `json:"language"`
	LdapBaseDn                           *string                           `json:"ldap_base_dn"`
	LdapDomain                           *string                           `json:"ldap_domain"`
	LdapEnabled                          *bool                             `json:"ldap_enabled"`
	LdapGroupAction                      *string                           `json:"ldap_group_action"`
	LdapGroupExclusion                   *string                           `json:"ldap_group_exclusion"`
	LdapGroupInclusion                   *string                           `json:"ldap_group_inclusion"`
	LdapHost                             *string                           `json:"ldap_host"`
	LdapHost2                            *string                           `json:"ldap_host_2"`
	LdapHost3                            *string                           `json:"ldap_host_3"`
	LdapPort                             *int32                            `json:"ldap_port"`
	LdapSecure                           *bool                             `json:"ldap_secure"`
	LdapType                             *string                           `json:"ldap_type"`
	LdapUserAction                       *string                           `json:"ldap_user_action"`
	LdapUserIncludeGroups                *string                           `json:"ldap_user_include_groups"`
	LdapUsername                         *string                           `json:"ldap_username"`
	LdapUsernameField                    *string                           `json:"ldap_username_field"`
	LoginHelpText                        *string                           `json:"login_help_text"`
	Logo                                 *ImageEntity                      `json:"logo"`
	MaxPriorPasswords                    *int32                            `json:"max_prior_passwords"`
	MobileApp                            *bool                             `json:"mobile_app"`
	MobileAppSessionIPPinning            *bool                             `json:"mobile_app_session_ip_pinning"`
	MobileAppSessionLifetime             *int32                            `json:"mobile_app_session_lifetime"`
	Name                                 *string                           `json:"name"`
	NextBillingAmount                    *float64                          `json:"next_billing_amount"`
	NextBillingDate                      *string                           `json:"next_billing_date"`
	NonSsoGroupsAllowed                  *bool                             `json:"non_sso_groups_allowed"`
	NonSsoUsersAllowed                   *bool                             `json:"non_sso_users_allowed"`
	OfficeIntegrationAvailable           *bool                             `json:"office_integration_available"`
	OncehubLink                          *string                           `json:"oncehub_link"`
	OptOutGlobal                         *bool                             `json:"opt_out_global"`
	OverageNotifiedAt                    *time.Time                        `json:"overage_notified_at"`
	OverageNotify                        *bool                             `json:"overage_notify"`
	Overdue                              *bool                             `json:"overdue"`
	PasswordMinLength                    *int32                            `json:"password_min_length"`
	PasswordRequireLetter                *bool                             `json:"password_require_letter"`
	PasswordRequireMixed                 *bool                             `json:"password_require_mixed"`
	PasswordRequireNumber                *bool                             `json:"password_require_number"`
	PasswordRequireSpecial               *bool                             `json:"password_require_special"`
	PasswordRequireUnbreached            *bool                             `json:"password_require_unbreached"`
	PasswordRequirementsApplyToBundles   *bool                             `json:"password_requirements_apply_to_bundles"`
	PasswordValidityDays                 *int32                            `json:"password_validity_days"`
	Phone                                *string                           `json:"phone"`
	ReplyToEmail                         *string                           `json:"reply_to_email"`
	Require2fa                           *bool                             `json:"require_2fa"`
	Require2faStopTime                   *time.Time                        `json:"require_2fa_stop_time"`
	Require2faUserType                   *SiteEntityRequire2faUserTypeEnum `json:"require_2fa_user_type"`
	Session                              *SessionEntity                    `json:"session"`
	SessionExpiry                        *float64                          `json:"session_expiry"`
	SessionPinnedByIP                    *bool                             `json:"session_pinned_by_ip"`
	SftpUserRootEnabled                  *bool                             `json:"sftp_user_root_enabled"`
	SharingEnabled                       *bool                             `json:"sharing_enabled"`
	ShowRequestAccessLink                *bool                             `json:"show_request_access_link"`
	SiteFooter                           *string                           `json:"site_footer"`
	SiteHeader                           *string                           `json:"site_header"`
	SMTPAddress                          *string                           `json:"smtp_address"`
	SMTPAuthentication                   *string                           `json:"smtp_authentication"`
	SMTPFrom                             *string                           `json:"smtp_from"`
	SMTPPort                             *int32                            `json:"smtp_port"`
	SMTPUsername                         *string                           `json:"smtp_username"`
	SslRequired                          *bool                             `json:"ssl_required"`
	Subdomain                            *string                           `json:"subdomain"`
	SwitchToPlanDate                     *time.Time                        `json:"switch_to_plan_date"`
	TLSDisabled                          *bool                             `json:"tls_disabled"`
	TrialDaysLeft                        *int32                            `json:"trial_days_left"`
	TrialUntil                           *time.Time                        `json:"trial_until"`
	UpdatedAt                            *time.Time                        `json:"updated_at"`
	UseProvidedModifiedAt                *bool                             `json:"use_provided_modified_at"`
	User                                 *UserEntity                       `json:"user"`
	UserLockout                          *bool                             `json:"user_lockout"`
	UserLockoutLockPeriod                *int32                            `json:"user_lockout_lock_period"`
	UserLockoutTries                     *int32                            `json:"user_lockout_tries"`
	UserLockoutWithin                    *int32                            `json:"user_lockout_within"`
	UserRequestsEnabled                  *bool                             `json:"user_requests_enabled"`
	WelcomeCustomText                    *string                           `json:"welcome_custom_text"`
	WelcomeEmailCc                       *string                           `json:"welcome_email_cc"`
	WelcomeEmailEnabled                  *bool                             `json:"welcome_email_enabled"`
	WelcomeScreen                        *SiteEntityWelcomeScreenEnum      `json:"welcome_screen"`
	WindowsModeFtp                       *bool                             `json:"windows_mode_ftp"`
}
