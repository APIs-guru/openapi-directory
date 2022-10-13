package operations

import (
	"openapi/pkg/models/shared"
)

type PatchSiteRequestBodyIcon128File struct {
	Content     []byte `multipartForm:"content"`
	Icon128File string `multipartForm:"name=icon128_file"`
}

type PatchSiteRequestBodyIcon16File struct {
	Content    []byte `multipartForm:"content"`
	Icon16File string `multipartForm:"name=icon16_file"`
}

type PatchSiteRequestBodyIcon32File struct {
	Content    []byte `multipartForm:"content"`
	Icon32File string `multipartForm:"name=icon32_file"`
}

type PatchSiteRequestBodyIcon48File struct {
	Content    []byte `multipartForm:"content"`
	Icon48File string `multipartForm:"name=icon48_file"`
}

type PatchSiteRequestBodyLogoFile struct {
	Content  []byte `multipartForm:"content"`
	LogoFile string `multipartForm:"name=logo_file"`
}

type PatchSiteRequestBody struct {
	AllowBundleNames                     *bool                            `multipartForm:"name=allow_bundle_names"`
	Allowed2faMethodSms                  *bool                            `multipartForm:"name=allowed_2fa_method_sms"`
	Allowed2faMethodTotp                 *bool                            `multipartForm:"name=allowed_2fa_method_totp"`
	Allowed2faMethodU2f                  *bool                            `multipartForm:"name=allowed_2fa_method_u2f"`
	Allowed2faMethodYubi                 *bool                            `multipartForm:"name=allowed_2fa_method_yubi"`
	AllowedCountries                     *string                          `multipartForm:"name=allowed_countries"`
	AllowedIps                           *string                          `multipartForm:"name=allowed_ips"`
	AskAboutOverwrites                   *bool                            `multipartForm:"name=ask_about_overwrites"`
	BundleExpiration                     *int32                           `multipartForm:"name=bundle_expiration"`
	BundlePasswordRequired               *bool                            `multipartForm:"name=bundle_password_required"`
	BundleRequireShareRecipient          *bool                            `multipartForm:"name=bundle_require_share_recipient"`
	Color2Left                           *string                          `multipartForm:"name=color2_left"`
	Color2Link                           *string                          `multipartForm:"name=color2_link"`
	Color2Text                           *string                          `multipartForm:"name=color2_text"`
	Color2Top                            *string                          `multipartForm:"name=color2_top"`
	Color2TopText                        *string                          `multipartForm:"name=color2_top_text"`
	CustomNamespace                      *bool                            `multipartForm:"name=custom_namespace"`
	DaysToRetainBackups                  *int32                           `multipartForm:"name=days_to_retain_backups"`
	DefaultTimeZone                      *string                          `multipartForm:"name=default_time_zone"`
	DesktopApp                           *bool                            `multipartForm:"name=desktop_app"`
	DesktopAppSessionIPPinning           *bool                            `multipartForm:"name=desktop_app_session_ip_pinning"`
	DesktopAppSessionLifetime            *int32                           `multipartForm:"name=desktop_app_session_lifetime"`
	Disable2faWithDelay                  *bool                            `multipartForm:"name=disable_2fa_with_delay"`
	DisablePasswordReset                 *bool                            `multipartForm:"name=disable_password_reset"`
	DisableUsersFromInactivityPeriodDays *int32                           `multipartForm:"name=disable_users_from_inactivity_period_days"`
	DisallowedCountries                  *string                          `multipartForm:"name=disallowed_countries"`
	Domain                               *string                          `multipartForm:"name=domain"`
	Email                                *string                          `multipartForm:"name=email"`
	FolderPermissionsGroupsOnly          *bool                            `multipartForm:"name=folder_permissions_groups_only"`
	Icon128Delete                        *bool                            `multipartForm:"name=icon128_delete"`
	Icon128File                          *PatchSiteRequestBodyIcon128File `multipartForm:"file"`
	Icon16Delete                         *bool                            `multipartForm:"name=icon16_delete"`
	Icon16File                           *PatchSiteRequestBodyIcon16File  `multipartForm:"file"`
	Icon32Delete                         *bool                            `multipartForm:"name=icon32_delete"`
	Icon32File                           *PatchSiteRequestBodyIcon32File  `multipartForm:"file"`
	Icon48Delete                         *bool                            `multipartForm:"name=icon48_delete"`
	Icon48File                           *PatchSiteRequestBodyIcon48File  `multipartForm:"file"`
	ImmutableFiles                       *bool                            `multipartForm:"name=immutable_files"`
	IncludePasswordInWelcomeEmail        *bool                            `multipartForm:"name=include_password_in_welcome_email"`
	Language                             *string                          `multipartForm:"name=language"`
	LdapBaseDn                           *string                          `multipartForm:"name=ldap_base_dn"`
	LdapDomain                           *string                          `multipartForm:"name=ldap_domain"`
	LdapEnabled                          *bool                            `multipartForm:"name=ldap_enabled"`
	LdapGroupAction                      *string                          `multipartForm:"name=ldap_group_action"`
	LdapGroupExclusion                   *string                          `multipartForm:"name=ldap_group_exclusion"`
	LdapGroupInclusion                   *string                          `multipartForm:"name=ldap_group_inclusion"`
	LdapHost                             *string                          `multipartForm:"name=ldap_host"`
	LdapHost2                            *string                          `multipartForm:"name=ldap_host_2"`
	LdapHost3                            *string                          `multipartForm:"name=ldap_host_3"`
	LdapPasswordChange                   *string                          `multipartForm:"name=ldap_password_change"`
	LdapPasswordChangeConfirmation       *string                          `multipartForm:"name=ldap_password_change_confirmation"`
	LdapPort                             *int32                           `multipartForm:"name=ldap_port"`
	LdapSecure                           *bool                            `multipartForm:"name=ldap_secure"`
	LdapType                             *string                          `multipartForm:"name=ldap_type"`
	LdapUserAction                       *string                          `multipartForm:"name=ldap_user_action"`
	LdapUserIncludeGroups                *string                          `multipartForm:"name=ldap_user_include_groups"`
	LdapUsername                         *string                          `multipartForm:"name=ldap_username"`
	LdapUsernameField                    *string                          `multipartForm:"name=ldap_username_field"`
	LoginHelpText                        *string                          `multipartForm:"name=login_help_text"`
	LogoDelete                           *bool                            `multipartForm:"name=logo_delete"`
	LogoFile                             *PatchSiteRequestBodyLogoFile    `multipartForm:"file"`
	MaxPriorPasswords                    *int32                           `multipartForm:"name=max_prior_passwords"`
	MobileApp                            *bool                            `multipartForm:"name=mobile_app"`
	MobileAppSessionIPPinning            *bool                            `multipartForm:"name=mobile_app_session_ip_pinning"`
	MobileAppSessionLifetime             *int32                           `multipartForm:"name=mobile_app_session_lifetime"`
	Name                                 *string                          `multipartForm:"name=name"`
	NonSsoGroupsAllowed                  *bool                            `multipartForm:"name=non_sso_groups_allowed"`
	NonSsoUsersAllowed                   *bool                            `multipartForm:"name=non_sso_users_allowed"`
	OfficeIntegrationAvailable           *bool                            `multipartForm:"name=office_integration_available"`
	OptOutGlobal                         *bool                            `multipartForm:"name=opt_out_global"`
	OverageNotify                        *bool                            `multipartForm:"name=overage_notify"`
	PasswordMinLength                    *int32                           `multipartForm:"name=password_min_length"`
	PasswordRequireLetter                *bool                            `multipartForm:"name=password_require_letter"`
	PasswordRequireMixed                 *bool                            `multipartForm:"name=password_require_mixed"`
	PasswordRequireNumber                *bool                            `multipartForm:"name=password_require_number"`
	PasswordRequireSpecial               *bool                            `multipartForm:"name=password_require_special"`
	PasswordRequireUnbreached            *bool                            `multipartForm:"name=password_require_unbreached"`
	PasswordRequirementsApplyToBundles   *bool                            `multipartForm:"name=password_requirements_apply_to_bundles"`
	PasswordValidityDays                 *int32                           `multipartForm:"name=password_validity_days"`
	ReplyToEmail                         *string                          `multipartForm:"name=reply_to_email"`
	Require2fa                           *bool                            `multipartForm:"name=require_2fa"`
	Require2faUserType                   *string                          `multipartForm:"name=require_2fa_user_type"`
	SessionExpiry                        *float64                         `multipartForm:"name=session_expiry"`
	SessionPinnedByIP                    *bool                            `multipartForm:"name=session_pinned_by_ip"`
	SftpUserRootEnabled                  *bool                            `multipartForm:"name=sftp_user_root_enabled"`
	SharingEnabled                       *bool                            `multipartForm:"name=sharing_enabled"`
	ShowRequestAccessLink                *bool                            `multipartForm:"name=show_request_access_link"`
	SiteFooter                           *string                          `multipartForm:"name=site_footer"`
	SiteHeader                           *string                          `multipartForm:"name=site_header"`
	SMTPAddress                          *string                          `multipartForm:"name=smtp_address"`
	SMTPAuthentication                   *string                          `multipartForm:"name=smtp_authentication"`
	SMTPFrom                             *string                          `multipartForm:"name=smtp_from"`
	SMTPPassword                         *string                          `multipartForm:"name=smtp_password"`
	SMTPPort                             *int32                           `multipartForm:"name=smtp_port"`
	SMTPUsername                         *string                          `multipartForm:"name=smtp_username"`
	SslRequired                          *bool                            `multipartForm:"name=ssl_required"`
	Subdomain                            *string                          `multipartForm:"name=subdomain"`
	TLSDisabled                          *bool                            `multipartForm:"name=tls_disabled"`
	UseProvidedModifiedAt                *bool                            `multipartForm:"name=use_provided_modified_at"`
	UserLockout                          *bool                            `multipartForm:"name=user_lockout"`
	UserLockoutLockPeriod                *int32                           `multipartForm:"name=user_lockout_lock_period"`
	UserLockoutTries                     *int32                           `multipartForm:"name=user_lockout_tries"`
	UserLockoutWithin                    *int32                           `multipartForm:"name=user_lockout_within"`
	UserRequestsEnabled                  *bool                            `multipartForm:"name=user_requests_enabled"`
	WelcomeCustomText                    *string                          `multipartForm:"name=welcome_custom_text"`
	WelcomeEmailCc                       *string                          `multipartForm:"name=welcome_email_cc"`
	WelcomeEmailEnabled                  *bool                            `multipartForm:"name=welcome_email_enabled"`
	WelcomeScreen                        *string                          `multipartForm:"name=welcome_screen"`
	WindowsModeFtp                       *bool                            `multipartForm:"name=windows_mode_ftp"`
}

type PatchSiteRequest struct {
	Request *PatchSiteRequestBody `request:"mediaType=multipart/form-data"`
}

type PatchSiteResponse struct {
	ContentType string
	SiteEntity  *shared.SiteEntity
	StatusCode  int64
}
