import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";

export enum PostUsersRequestBodyAuthenticationMethodEnum {
    Password = "password"
,    UnusedFormerLdap = "unused_former_ldap"
,    Sso = "sso"
,    None = "none"
,    EmailSignup = "email_signup"
}


export class PostUsersRequestBodyAvatarFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=avatar_file" })
  avatarFile: string;

  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}

export enum PostUsersRequestBodyRequire2faEnum {
    UseSystemSetting = "use_system_setting"
,    AlwaysRequire = "always_require"
,    NeverRequire = "never_require"
}

export enum PostUsersRequestBodySslRequiredEnum {
    UseSystemSetting = "use_system_setting"
,    AlwaysRequire = "always_require"
,    NeverRequire = "never_require"
}


export class PostUsersRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=allowed_ips" })
  allowedIps?: string;

  @Metadata({ data: "multipart_form, name=announcements_read" })
  announcementsRead?: boolean;

  @Metadata({ data: "multipart_form, name=attachments_permission" })
  attachmentsPermission?: boolean;

  @Metadata({ data: "multipart_form, name=authenticate_until" })
  authenticateUntil?: Date;

  @Metadata({ data: "multipart_form, name=authentication_method" })
  authenticationMethod?: PostUsersRequestBodyAuthenticationMethodEnum;

  @Metadata({ data: "multipart_form, name=avatar_delete" })
  avatarDelete?: boolean;

  @Metadata({ data: "multipart_form, file=true" })
  avatarFile?: PostUsersRequestBodyAvatarFile;

  @Metadata({ data: "multipart_form, name=billing_permission" })
  billingPermission?: boolean;

  @Metadata({ data: "multipart_form, name=bypass_inactive_disable" })
  bypassInactiveDisable?: boolean;

  @Metadata({ data: "multipart_form, name=bypass_site_allowed_ips" })
  bypassSiteAllowedIps?: boolean;

  @Metadata({ data: "multipart_form, name=change_password" })
  changePassword?: string;

  @Metadata({ data: "multipart_form, name=change_password_confirmation" })
  changePasswordConfirmation?: string;

  @Metadata({ data: "multipart_form, name=company" })
  company?: string;

  @Metadata({ data: "multipart_form, name=dav_permission" })
  davPermission?: boolean;

  @Metadata({ data: "multipart_form, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "multipart_form, name=email" })
  email?: string;

  @Metadata({ data: "multipart_form, name=ftp_permission" })
  ftpPermission?: boolean;

  @Metadata({ data: "multipart_form, name=grant_permission" })
  grantPermission?: string;

  @Metadata({ data: "multipart_form, name=group_id" })
  groupId?: number;

  @Metadata({ data: "multipart_form, name=group_ids" })
  groupIds?: string;

  @Metadata({ data: "multipart_form, name=header_text" })
  headerText?: string;

  @Metadata({ data: "multipart_form, name=language" })
  language?: string;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=notes" })
  notes?: string;

  @Metadata({ data: "multipart_form, name=notification_daily_send_time" })
  notificationDailySendTime?: number;

  @Metadata({ data: "multipart_form, name=office_integration_enabled" })
  officeIntegrationEnabled?: boolean;

  @Metadata({ data: "multipart_form, name=password" })
  password?: string;

  @Metadata({ data: "multipart_form, name=password_confirmation" })
  passwordConfirmation?: string;

  @Metadata({ data: "multipart_form, name=password_validity_days" })
  passwordValidityDays?: number;

  @Metadata({ data: "multipart_form, name=receive_admin_alerts" })
  receiveAdminAlerts?: boolean;

  @Metadata({ data: "multipart_form, name=require_2fa" })
  require2fa?: PostUsersRequestBodyRequire2faEnum;

  @Metadata({ data: "multipart_form, name=require_password_change" })
  requirePasswordChange?: boolean;

  @Metadata({ data: "multipart_form, name=restapi_permission" })
  restapiPermission?: boolean;

  @Metadata({ data: "multipart_form, name=self_managed" })
  selfManaged?: boolean;

  @Metadata({ data: "multipart_form, name=sftp_permission" })
  sftpPermission?: boolean;

  @Metadata({ data: "multipart_form, name=site_admin" })
  siteAdmin?: boolean;

  @Metadata({ data: "multipart_form, name=skip_welcome_screen" })
  skipWelcomeScreen?: boolean;

  @Metadata({ data: "multipart_form, name=ssl_required" })
  sslRequired?: PostUsersRequestBodySslRequiredEnum;

  @Metadata({ data: "multipart_form, name=sso_strategy_id" })
  ssoStrategyId?: number;

  @Metadata({ data: "multipart_form, name=subscribe_to_newsletter" })
  subscribeToNewsletter?: boolean;

  @Metadata({ data: "multipart_form, name=time_zone" })
  timeZone?: string;

  @Metadata({ data: "multipart_form, name=user_root" })
  userRoot?: string;

  @Metadata({ data: "multipart_form, name=username" })
  username?: string;
}


export class PostUsersRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PostUsersRequestBody;
}


export class PostUsersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  userEntity?: shared.UserEntity;
}
