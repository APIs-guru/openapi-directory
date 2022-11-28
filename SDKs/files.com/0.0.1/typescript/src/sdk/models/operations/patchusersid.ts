import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchUsersIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum PatchUsersIdRequestBodyAuthenticationMethodEnum {
    Password = "password",
    UnusedFormerLdap = "unused_former_ldap",
    Sso = "sso",
    None = "none",
    EmailSignup = "email_signup"
}


export class PatchUsersIdRequestBodyAvatarFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=avatar_file" })
  avatarFile: string;

  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;
}

export enum PatchUsersIdRequestBodyRequire2faEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}

export enum PatchUsersIdRequestBodySslRequiredEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}


export class PatchUsersIdRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=allowed_ips" })
  allowedIps?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=announcements_read" })
  announcementsRead?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=attachments_permission" })
  attachmentsPermission?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=authenticate_until" })
  authenticateUntil?: Date;

  @SpeakeasyMetadata({ data: "multipart_form, name=authentication_method" })
  authenticationMethod?: PatchUsersIdRequestBodyAuthenticationMethodEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=avatar_delete" })
  avatarDelete?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  avatarFile?: PatchUsersIdRequestBodyAvatarFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=billing_permission" })
  billingPermission?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=bypass_inactive_disable" })
  bypassInactiveDisable?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=bypass_site_allowed_ips" })
  bypassSiteAllowedIps?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=change_password" })
  changePassword?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=change_password_confirmation" })
  changePasswordConfirmation?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=dav_permission" })
  davPermission?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ftp_permission" })
  ftpPermission?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=grant_permission" })
  grantPermission?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=group_id" })
  groupId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=group_ids" })
  groupIds?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=header_text" })
  headerText?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=notification_daily_send_time" })
  notificationDailySendTime?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=office_integration_enabled" })
  officeIntegrationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=password_confirmation" })
  passwordConfirmation?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=password_validity_days" })
  passwordValidityDays?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=receive_admin_alerts" })
  receiveAdminAlerts?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=require_2fa" })
  require2fa?: PatchUsersIdRequestBodyRequire2faEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=require_password_change" })
  requirePasswordChange?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=restapi_permission" })
  restapiPermission?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=self_managed" })
  selfManaged?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=sftp_permission" })
  sftpPermission?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=site_admin" })
  siteAdmin?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=skip_welcome_screen" })
  skipWelcomeScreen?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=ssl_required" })
  sslRequired?: PatchUsersIdRequestBodySslRequiredEnum;

  @SpeakeasyMetadata({ data: "multipart_form, name=sso_strategy_id" })
  ssoStrategyId?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=subscribe_to_newsletter" })
  subscribeToNewsletter?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=time_zone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_root" })
  userRoot?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=username" })
  username?: string;
}


export class PatchUsersIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PatchUsersIdPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchUsersIdRequestBody;
}


export class PatchUsersIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  userEntity?: shared.UserEntity;
}
