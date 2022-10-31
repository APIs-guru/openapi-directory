package operations

import (
"time"
"openapi/pkg/models/shared")


type PatchUserRequestBodyAuthenticationMethodEnum string

const (
    PatchUserRequestBodyAuthenticationMethodEnumPassword PatchUserRequestBodyAuthenticationMethodEnum = "password"
PatchUserRequestBodyAuthenticationMethodEnumUnusedFormerLdap PatchUserRequestBodyAuthenticationMethodEnum = "unused_former_ldap"
PatchUserRequestBodyAuthenticationMethodEnumSso PatchUserRequestBodyAuthenticationMethodEnum = "sso"
PatchUserRequestBodyAuthenticationMethodEnumNone PatchUserRequestBodyAuthenticationMethodEnum = "none"
PatchUserRequestBodyAuthenticationMethodEnumEmailSignup PatchUserRequestBodyAuthenticationMethodEnum = "email_signup"
)


type PatchUserRequestBodyAvatarFile struct {
    AvatarFile string `multipartForm:"name=avatar_file"`
    Content []byte `multipartForm:"content"`
    
}


type PatchUserRequestBodyRequire2faEnum string

const (
    PatchUserRequestBodyRequire2faEnumUseSystemSetting PatchUserRequestBodyRequire2faEnum = "use_system_setting"
PatchUserRequestBodyRequire2faEnumAlwaysRequire PatchUserRequestBodyRequire2faEnum = "always_require"
PatchUserRequestBodyRequire2faEnumNeverRequire PatchUserRequestBodyRequire2faEnum = "never_require"
)



type PatchUserRequestBodySslRequiredEnum string

const (
    PatchUserRequestBodySslRequiredEnumUseSystemSetting PatchUserRequestBodySslRequiredEnum = "use_system_setting"
PatchUserRequestBodySslRequiredEnumAlwaysRequire PatchUserRequestBodySslRequiredEnum = "always_require"
PatchUserRequestBodySslRequiredEnumNeverRequire PatchUserRequestBodySslRequiredEnum = "never_require"
)


type PatchUserRequestBody struct {
    AllowedIps *string `multipartForm:"name=allowed_ips"`
    AnnouncementsRead *bool `multipartForm:"name=announcements_read"`
    AttachmentsPermission *bool `multipartForm:"name=attachments_permission"`
    AuthenticateUntil *time.Time `multipartForm:"name=authenticate_until"`
    AuthenticationMethod *PatchUserRequestBodyAuthenticationMethodEnum `multipartForm:"name=authentication_method"`
    AvatarDelete *bool `multipartForm:"name=avatar_delete"`
    AvatarFile *PatchUserRequestBodyAvatarFile `multipartForm:"file"`
    BillingPermission *bool `multipartForm:"name=billing_permission"`
    BypassInactiveDisable *bool `multipartForm:"name=bypass_inactive_disable"`
    BypassSiteAllowedIps *bool `multipartForm:"name=bypass_site_allowed_ips"`
    ChangePassword *string `multipartForm:"name=change_password"`
    ChangePasswordConfirmation *string `multipartForm:"name=change_password_confirmation"`
    Company *string `multipartForm:"name=company"`
    DavPermission *bool `multipartForm:"name=dav_permission"`
    Disabled *bool `multipartForm:"name=disabled"`
    Email *string `multipartForm:"name=email"`
    FtpPermission *bool `multipartForm:"name=ftp_permission"`
    GrantPermission *string `multipartForm:"name=grant_permission"`
    GroupID *int32 `multipartForm:"name=group_id"`
    GroupIds *string `multipartForm:"name=group_ids"`
    HeaderText *string `multipartForm:"name=header_text"`
    Language *string `multipartForm:"name=language"`
    Name *string `multipartForm:"name=name"`
    Notes *string `multipartForm:"name=notes"`
    NotificationDailySendTime *int32 `multipartForm:"name=notification_daily_send_time"`
    OfficeIntegrationEnabled *bool `multipartForm:"name=office_integration_enabled"`
    Password *string `multipartForm:"name=password"`
    PasswordConfirmation *string `multipartForm:"name=password_confirmation"`
    PasswordValidityDays *int32 `multipartForm:"name=password_validity_days"`
    ReceiveAdminAlerts *bool `multipartForm:"name=receive_admin_alerts"`
    Require2fa *PatchUserRequestBodyRequire2faEnum `multipartForm:"name=require_2fa"`
    RequirePasswordChange *bool `multipartForm:"name=require_password_change"`
    RestapiPermission *bool `multipartForm:"name=restapi_permission"`
    SelfManaged *bool `multipartForm:"name=self_managed"`
    SftpPermission *bool `multipartForm:"name=sftp_permission"`
    SiteAdmin *bool `multipartForm:"name=site_admin"`
    SkipWelcomeScreen *bool `multipartForm:"name=skip_welcome_screen"`
    SslRequired *PatchUserRequestBodySslRequiredEnum `multipartForm:"name=ssl_required"`
    SsoStrategyID *int32 `multipartForm:"name=sso_strategy_id"`
    SubscribeToNewsletter *bool `multipartForm:"name=subscribe_to_newsletter"`
    TimeZone *string `multipartForm:"name=time_zone"`
    UserRoot *string `multipartForm:"name=user_root"`
    Username *string `multipartForm:"name=username"`
    
}

type PatchUserRequest struct {
    Request *PatchUserRequestBody `request:"mediaType=multipart/form-data"`
    
}

type PatchUserResponse struct {
    ContentType string 
    StatusCode int64 
    UserEntity *shared.UserEntity 
    
}

