import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum UserEntityAuthenticationMethodEnum {
    Password = "password"
,    UnusedFormerLdap = "unused_former_ldap"
,    Sso = "sso"
,    None = "none"
,    EmailSignup = "email_signup"
}

export enum UserEntityRequire2faEnum {
    UseSystemSetting = "use_system_setting"
,    AlwaysRequire = "always_require"
,    NeverRequire = "never_require"
}

export enum UserEntitySslRequiredEnum {
    UseSystemSetting = "use_system_setting"
,    AlwaysRequire = "always_require"
,    NeverRequire = "never_require"
}


// UserEntity
/** 
 * Create User
**/
export class UserEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_2fa" })
  active2fa?: boolean;

  @Metadata({ data: "json, name=admin_group_ids" })
  adminGroupIds?: number[];

  @Metadata({ data: "json, name=allowed_ips" })
  allowedIps?: string;

  @Metadata({ data: "json, name=api_keys_count" })
  apiKeysCount?: number;

  @Metadata({ data: "json, name=attachments_permission" })
  attachmentsPermission?: boolean;

  @Metadata({ data: "json, name=authenticate_until" })
  authenticateUntil?: Date;

  @Metadata({ data: "json, name=authentication_method" })
  authenticationMethod?: UserEntityAuthenticationMethodEnum;

  @Metadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @Metadata({ data: "json, name=billing_permission" })
  billingPermission?: boolean;

  @Metadata({ data: "json, name=bypass_inactive_disable" })
  bypassInactiveDisable?: boolean;

  @Metadata({ data: "json, name=bypass_site_allowed_ips" })
  bypassSiteAllowedIps?: boolean;

  @Metadata({ data: "json, name=company" })
  company?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=dav_permission" })
  davPermission?: boolean;

  @Metadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=externally_managed" })
  externallyManaged?: boolean;

  @Metadata({ data: "json, name=ftp_permission" })
  ftpPermission?: boolean;

  @Metadata({ data: "json, name=group_ids" })
  groupIds?: string;

  @Metadata({ data: "json, name=header_text" })
  headerText?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=last_login_at" })
  lastLoginAt?: Date;

  @Metadata({ data: "json, name=last_protocol_cipher" })
  lastProtocolCipher?: string;

  @Metadata({ data: "json, name=lockout_expires" })
  lockoutExpires?: Date;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=notes" })
  notes?: string;

  @Metadata({ data: "json, name=notification_daily_send_time" })
  notificationDailySendTime?: number;

  @Metadata({ data: "json, name=office_integration_enabled" })
  officeIntegrationEnabled?: boolean;

  @Metadata({ data: "json, name=password_set_at" })
  passwordSetAt?: Date;

  @Metadata({ data: "json, name=password_validity_days" })
  passwordValidityDays?: number;

  @Metadata({ data: "json, name=public_keys_count" })
  publicKeysCount?: number;

  @Metadata({ data: "json, name=receive_admin_alerts" })
  receiveAdminAlerts?: boolean;

  @Metadata({ data: "json, name=require_2fa" })
  require2fa?: UserEntityRequire2faEnum;

  @Metadata({ data: "json, name=require_password_change" })
  requirePasswordChange?: boolean;

  @Metadata({ data: "json, name=restapi_permission" })
  restapiPermission?: boolean;

  @Metadata({ data: "json, name=self_managed" })
  selfManaged?: boolean;

  @Metadata({ data: "json, name=sftp_permission" })
  sftpPermission?: boolean;

  @Metadata({ data: "json, name=site_admin" })
  siteAdmin?: boolean;

  @Metadata({ data: "json, name=skip_welcome_screen" })
  skipWelcomeScreen?: boolean;

  @Metadata({ data: "json, name=ssl_required" })
  sslRequired?: UserEntitySslRequiredEnum;

  @Metadata({ data: "json, name=sso_strategy_id" })
  ssoStrategyId?: number;

  @Metadata({ data: "json, name=subscribe_to_newsletter" })
  subscribeToNewsletter?: boolean;

  @Metadata({ data: "json, name=time_zone" })
  timeZone?: string;

  @Metadata({ data: "json, name=type_of_2fa" })
  typeOf2fa?: string;

  @Metadata({ data: "json, name=user_root" })
  userRoot?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}
