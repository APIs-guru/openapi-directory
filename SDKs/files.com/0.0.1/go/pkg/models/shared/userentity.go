package shared

import (
	"time"
)

type UserEntityAuthenticationMethodEnum string

const (
	UserEntityAuthenticationMethodEnumPassword         UserEntityAuthenticationMethodEnum = "password"
	UserEntityAuthenticationMethodEnumUnusedFormerLdap UserEntityAuthenticationMethodEnum = "unused_former_ldap"
	UserEntityAuthenticationMethodEnumSso              UserEntityAuthenticationMethodEnum = "sso"
	UserEntityAuthenticationMethodEnumNone             UserEntityAuthenticationMethodEnum = "none"
	UserEntityAuthenticationMethodEnumEmailSignup      UserEntityAuthenticationMethodEnum = "email_signup"
)

type UserEntityRequire2faEnum string

const (
	UserEntityRequire2faEnumUseSystemSetting UserEntityRequire2faEnum = "use_system_setting"
	UserEntityRequire2faEnumAlwaysRequire    UserEntityRequire2faEnum = "always_require"
	UserEntityRequire2faEnumNeverRequire     UserEntityRequire2faEnum = "never_require"
)

type UserEntitySslRequiredEnum string

const (
	UserEntitySslRequiredEnumUseSystemSetting UserEntitySslRequiredEnum = "use_system_setting"
	UserEntitySslRequiredEnumAlwaysRequire    UserEntitySslRequiredEnum = "always_require"
	UserEntitySslRequiredEnumNeverRequire     UserEntitySslRequiredEnum = "never_require"
)

type UserEntity struct {
	Active2fa                 *bool                               `json:"active_2fa,omitempty"`
	AdminGroupIds             []int32                             `json:"admin_group_ids,omitempty"`
	AllowedIps                *string                             `json:"allowed_ips,omitempty"`
	APIKeysCount              *int32                              `json:"api_keys_count,omitempty"`
	AttachmentsPermission     *bool                               `json:"attachments_permission,omitempty"`
	AuthenticateUntil         *time.Time                          `json:"authenticate_until,omitempty"`
	AuthenticationMethod      *UserEntityAuthenticationMethodEnum `json:"authentication_method,omitempty"`
	AvatarURL                 *string                             `json:"avatar_url,omitempty"`
	BillingPermission         *bool                               `json:"billing_permission,omitempty"`
	BypassInactiveDisable     *bool                               `json:"bypass_inactive_disable,omitempty"`
	BypassSiteAllowedIps      *bool                               `json:"bypass_site_allowed_ips,omitempty"`
	Company                   *string                             `json:"company,omitempty"`
	CreatedAt                 *time.Time                          `json:"created_at,omitempty"`
	DavPermission             *bool                               `json:"dav_permission,omitempty"`
	Disabled                  *bool                               `json:"disabled,omitempty"`
	Email                     *string                             `json:"email,omitempty"`
	ExternallyManaged         *bool                               `json:"externally_managed,omitempty"`
	FtpPermission             *bool                               `json:"ftp_permission,omitempty"`
	GroupIds                  *string                             `json:"group_ids,omitempty"`
	HeaderText                *string                             `json:"header_text,omitempty"`
	ID                        *int32                              `json:"id,omitempty"`
	Language                  *string                             `json:"language,omitempty"`
	LastLoginAt               *time.Time                          `json:"last_login_at,omitempty"`
	LastProtocolCipher        *string                             `json:"last_protocol_cipher,omitempty"`
	LockoutExpires            *time.Time                          `json:"lockout_expires,omitempty"`
	Name                      *string                             `json:"name,omitempty"`
	Notes                     *string                             `json:"notes,omitempty"`
	NotificationDailySendTime *int32                              `json:"notification_daily_send_time,omitempty"`
	OfficeIntegrationEnabled  *bool                               `json:"office_integration_enabled,omitempty"`
	PasswordSetAt             *time.Time                          `json:"password_set_at,omitempty"`
	PasswordValidityDays      *int32                              `json:"password_validity_days,omitempty"`
	PublicKeysCount           *int32                              `json:"public_keys_count,omitempty"`
	ReceiveAdminAlerts        *bool                               `json:"receive_admin_alerts,omitempty"`
	Require2fa                *UserEntityRequire2faEnum           `json:"require_2fa,omitempty"`
	RequirePasswordChange     *bool                               `json:"require_password_change,omitempty"`
	RestapiPermission         *bool                               `json:"restapi_permission,omitempty"`
	SelfManaged               *bool                               `json:"self_managed,omitempty"`
	SftpPermission            *bool                               `json:"sftp_permission,omitempty"`
	SiteAdmin                 *bool                               `json:"site_admin,omitempty"`
	SkipWelcomeScreen         *bool                               `json:"skip_welcome_screen,omitempty"`
	SslRequired               *UserEntitySslRequiredEnum          `json:"ssl_required,omitempty"`
	SsoStrategyID             *int32                              `json:"sso_strategy_id,omitempty"`
	SubscribeToNewsletter     *bool                               `json:"subscribe_to_newsletter,omitempty"`
	TimeZone                  *string                             `json:"time_zone,omitempty"`
	TypeOf2fa                 *string                             `json:"type_of_2fa,omitempty"`
	UserRoot                  *string                             `json:"user_root,omitempty"`
	Username                  *string                             `json:"username,omitempty"`
}
