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
	Active2fa                 *bool                               `json:"active_2fa"`
	AdminGroupIds             []int32                             `json:"admin_group_ids"`
	AllowedIps                *string                             `json:"allowed_ips"`
	APIKeysCount              *int32                              `json:"api_keys_count"`
	AttachmentsPermission     *bool                               `json:"attachments_permission"`
	AuthenticateUntil         *time.Time                          `json:"authenticate_until"`
	AuthenticationMethod      *UserEntityAuthenticationMethodEnum `json:"authentication_method"`
	AvatarURL                 *string                             `json:"avatar_url"`
	BillingPermission         *bool                               `json:"billing_permission"`
	BypassInactiveDisable     *bool                               `json:"bypass_inactive_disable"`
	BypassSiteAllowedIps      *bool                               `json:"bypass_site_allowed_ips"`
	Company                   *string                             `json:"company"`
	CreatedAt                 *time.Time                          `json:"created_at"`
	DavPermission             *bool                               `json:"dav_permission"`
	Disabled                  *bool                               `json:"disabled"`
	Email                     *string                             `json:"email"`
	ExternallyManaged         *bool                               `json:"externally_managed"`
	FtpPermission             *bool                               `json:"ftp_permission"`
	GroupIds                  *string                             `json:"group_ids"`
	HeaderText                *string                             `json:"header_text"`
	ID                        *int32                              `json:"id"`
	Language                  *string                             `json:"language"`
	LastLoginAt               *time.Time                          `json:"last_login_at"`
	LastProtocolCipher        *string                             `json:"last_protocol_cipher"`
	LockoutExpires            *time.Time                          `json:"lockout_expires"`
	Name                      *string                             `json:"name"`
	Notes                     *string                             `json:"notes"`
	NotificationDailySendTime *int32                              `json:"notification_daily_send_time"`
	OfficeIntegrationEnabled  *bool                               `json:"office_integration_enabled"`
	PasswordSetAt             *time.Time                          `json:"password_set_at"`
	PasswordValidityDays      *int32                              `json:"password_validity_days"`
	PublicKeysCount           *int32                              `json:"public_keys_count"`
	ReceiveAdminAlerts        *bool                               `json:"receive_admin_alerts"`
	Require2fa                *UserEntityRequire2faEnum           `json:"require_2fa"`
	RequirePasswordChange     *bool                               `json:"require_password_change"`
	RestapiPermission         *bool                               `json:"restapi_permission"`
	SelfManaged               *bool                               `json:"self_managed"`
	SftpPermission            *bool                               `json:"sftp_permission"`
	SiteAdmin                 *bool                               `json:"site_admin"`
	SkipWelcomeScreen         *bool                               `json:"skip_welcome_screen"`
	SslRequired               *UserEntitySslRequiredEnum          `json:"ssl_required"`
	SsoStrategyID             *int32                              `json:"sso_strategy_id"`
	SubscribeToNewsletter     *bool                               `json:"subscribe_to_newsletter"`
	TimeZone                  *string                             `json:"time_zone"`
	TypeOf2fa                 *string                             `json:"type_of_2fa"`
	UserRoot                  *string                             `json:"user_root"`
	Username                  *string                             `json:"username"`
}
