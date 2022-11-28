import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UserEntityAuthenticationMethodEnum {
    Password = "password",
    UnusedFormerLdap = "unused_former_ldap",
    Sso = "sso",
    None = "none",
    EmailSignup = "email_signup"
}

export enum UserEntityRequire2faEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}

export enum UserEntitySslRequiredEnum {
    UseSystemSetting = "use_system_setting",
    AlwaysRequire = "always_require",
    NeverRequire = "never_require"
}


// UserEntity
/** 
 * Create User
**/
export class UserEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_2fa" })
  active2fa?: boolean;

  @SpeakeasyMetadata({ data: "json, name=admin_group_ids" })
  adminGroupIds?: number[];

  @SpeakeasyMetadata({ data: "json, name=allowed_ips" })
  allowedIps?: string;

  @SpeakeasyMetadata({ data: "json, name=api_keys_count" })
  apiKeysCount?: number;

  @SpeakeasyMetadata({ data: "json, name=attachments_permission" })
  attachmentsPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=authenticate_until" })
  authenticateUntil?: Date;

  @SpeakeasyMetadata({ data: "json, name=authentication_method" })
  authenticationMethod?: UserEntityAuthenticationMethodEnum;

  @SpeakeasyMetadata({ data: "json, name=avatar_url" })
  avatarUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=billing_permission" })
  billingPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bypass_inactive_disable" })
  bypassInactiveDisable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bypass_site_allowed_ips" })
  bypassSiteAllowedIps?: boolean;

  @SpeakeasyMetadata({ data: "json, name=company" })
  company?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=dav_permission" })
  davPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=externally_managed" })
  externallyManaged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ftp_permission" })
  ftpPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=group_ids" })
  groupIds?: string;

  @SpeakeasyMetadata({ data: "json, name=header_text" })
  headerText?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=last_login_at" })
  lastLoginAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=last_protocol_cipher" })
  lastProtocolCipher?: string;

  @SpeakeasyMetadata({ data: "json, name=lockout_expires" })
  lockoutExpires?: Date;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=notes" })
  notes?: string;

  @SpeakeasyMetadata({ data: "json, name=notification_daily_send_time" })
  notificationDailySendTime?: number;

  @SpeakeasyMetadata({ data: "json, name=office_integration_enabled" })
  officeIntegrationEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password_set_at" })
  passwordSetAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=password_validity_days" })
  passwordValidityDays?: number;

  @SpeakeasyMetadata({ data: "json, name=public_keys_count" })
  publicKeysCount?: number;

  @SpeakeasyMetadata({ data: "json, name=receive_admin_alerts" })
  receiveAdminAlerts?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_2fa" })
  require2fa?: UserEntityRequire2faEnum;

  @SpeakeasyMetadata({ data: "json, name=require_password_change" })
  requirePasswordChange?: boolean;

  @SpeakeasyMetadata({ data: "json, name=restapi_permission" })
  restapiPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=self_managed" })
  selfManaged?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sftp_permission" })
  sftpPermission?: boolean;

  @SpeakeasyMetadata({ data: "json, name=site_admin" })
  siteAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=skip_welcome_screen" })
  skipWelcomeScreen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ssl_required" })
  sslRequired?: UserEntitySslRequiredEnum;

  @SpeakeasyMetadata({ data: "json, name=sso_strategy_id" })
  ssoStrategyId?: number;

  @SpeakeasyMetadata({ data: "json, name=subscribe_to_newsletter" })
  subscribeToNewsletter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=time_zone" })
  timeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=type_of_2fa" })
  typeOf2fa?: string;

  @SpeakeasyMetadata({ data: "json, name=user_root" })
  userRoot?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
