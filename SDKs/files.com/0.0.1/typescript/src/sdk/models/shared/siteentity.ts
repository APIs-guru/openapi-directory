import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ImageEntity } from "./imageentity";
import { ImageEntity } from "./imageentity";
import { ImageEntity } from "./imageentity";
import { ImageEntity } from "./imageentity";
import { ImageEntity } from "./imageentity";
import { SessionEntity } from "./sessionentity";
import { UserEntity } from "./userentity";

export enum SiteEntityRequire2faUserTypeEnum {
    All = "all"
,    FolderAndSiteAdmins = "folder_and_site_admins"
,    SiteAdmins = "site_admins"
}

export enum SiteEntityWelcomeScreenEnum {
    Enabled = "enabled"
,    Hidden = "hidden"
,    Disabled = "disabled"
}


// SiteEntity
/** 
 * Show site settings
**/
export class SiteEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin_user_id" })
  adminUserId?: number;

  @Metadata({ data: "json, name=allow_bundle_names" })
  allowBundleNames?: boolean;

  @Metadata({ data: "json, name=allowed_2fa_method_sms" })
  allowed2faMethodSms?: boolean;

  @Metadata({ data: "json, name=allowed_2fa_method_totp" })
  allowed2faMethodTotp?: boolean;

  @Metadata({ data: "json, name=allowed_2fa_method_u2f" })
  allowed2faMethodU2f?: boolean;

  @Metadata({ data: "json, name=allowed_2fa_method_yubi" })
  allowed2faMethodYubi?: boolean;

  @Metadata({ data: "json, name=allowed_countries" })
  allowedCountries?: string;

  @Metadata({ data: "json, name=allowed_ips" })
  allowedIps?: string;

  @Metadata({ data: "json, name=ask_about_overwrites" })
  askAboutOverwrites?: boolean;

  @Metadata({ data: "json, name=bundle_expiration" })
  bundleExpiration?: number;

  @Metadata({ data: "json, name=bundle_password_required" })
  bundlePasswordRequired?: boolean;

  @Metadata({ data: "json, name=bundle_require_share_recipient" })
  bundleRequireShareRecipient?: boolean;

  @Metadata({ data: "json, name=color2_left" })
  color2Left?: string;

  @Metadata({ data: "json, name=color2_link" })
  color2Link?: string;

  @Metadata({ data: "json, name=color2_text" })
  color2Text?: string;

  @Metadata({ data: "json, name=color2_top" })
  color2Top?: string;

  @Metadata({ data: "json, name=color2_top_text" })
  color2TopText?: string;

  @Metadata({ data: "json, name=contact_name" })
  contactName?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=currency" })
  currency?: string;

  @Metadata({ data: "json, name=custom_namespace" })
  customNamespace?: boolean;

  @Metadata({ data: "json, name=days_to_retain_backups" })
  daysToRetainBackups?: number;

  @Metadata({ data: "json, name=default_time_zone" })
  defaultTimeZone?: string;

  @Metadata({ data: "json, name=desktop_app" })
  desktopApp?: boolean;

  @Metadata({ data: "json, name=desktop_app_session_ip_pinning" })
  desktopAppSessionIpPinning?: boolean;

  @Metadata({ data: "json, name=desktop_app_session_lifetime" })
  desktopAppSessionLifetime?: number;

  @Metadata({ data: "json, name=disable_notifications" })
  disableNotifications?: boolean;

  @Metadata({ data: "json, name=disable_password_reset" })
  disablePasswordReset?: boolean;

  @Metadata({ data: "json, name=disable_users_from_inactivity_period_days" })
  disableUsersFromInactivityPeriodDays?: number;

  @Metadata({ data: "json, name=disallowed_countries" })
  disallowedCountries?: string;

  @Metadata({ data: "json, name=domain" })
  domain?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=folder_permissions_groups_only" })
  folderPermissionsGroupsOnly?: boolean;

  @Metadata({ data: "json, name=hipaa" })
  hipaa?: boolean;

  @Metadata({ data: "json, name=icon128" })
  icon128?: ImageEntity;

  @Metadata({ data: "json, name=icon16" })
  icon16?: ImageEntity;

  @Metadata({ data: "json, name=icon32" })
  icon32?: ImageEntity;

  @Metadata({ data: "json, name=icon48" })
  icon48?: ImageEntity;

  @Metadata({ data: "json, name=immutable_files_set_at" })
  immutableFilesSetAt?: Date;

  @Metadata({ data: "json, name=include_password_in_welcome_email" })
  includePasswordInWelcomeEmail?: boolean;

  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=ldap_base_dn" })
  ldapBaseDn?: string;

  @Metadata({ data: "json, name=ldap_domain" })
  ldapDomain?: string;

  @Metadata({ data: "json, name=ldap_enabled" })
  ldapEnabled?: boolean;

  @Metadata({ data: "json, name=ldap_group_action" })
  ldapGroupAction?: string;

  @Metadata({ data: "json, name=ldap_group_exclusion" })
  ldapGroupExclusion?: string;

  @Metadata({ data: "json, name=ldap_group_inclusion" })
  ldapGroupInclusion?: string;

  @Metadata({ data: "json, name=ldap_host" })
  ldapHost?: string;

  @Metadata({ data: "json, name=ldap_host_2" })
  ldapHost2?: string;

  @Metadata({ data: "json, name=ldap_host_3" })
  ldapHost3?: string;

  @Metadata({ data: "json, name=ldap_port" })
  ldapPort?: number;

  @Metadata({ data: "json, name=ldap_secure" })
  ldapSecure?: boolean;

  @Metadata({ data: "json, name=ldap_type" })
  ldapType?: string;

  @Metadata({ data: "json, name=ldap_user_action" })
  ldapUserAction?: string;

  @Metadata({ data: "json, name=ldap_user_include_groups" })
  ldapUserIncludeGroups?: string;

  @Metadata({ data: "json, name=ldap_username" })
  ldapUsername?: string;

  @Metadata({ data: "json, name=ldap_username_field" })
  ldapUsernameField?: string;

  @Metadata({ data: "json, name=login_help_text" })
  loginHelpText?: string;

  @Metadata({ data: "json, name=logo" })
  logo?: ImageEntity;

  @Metadata({ data: "json, name=max_prior_passwords" })
  maxPriorPasswords?: number;

  @Metadata({ data: "json, name=mobile_app" })
  mobileApp?: boolean;

  @Metadata({ data: "json, name=mobile_app_session_ip_pinning" })
  mobileAppSessionIpPinning?: boolean;

  @Metadata({ data: "json, name=mobile_app_session_lifetime" })
  mobileAppSessionLifetime?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=next_billing_amount" })
  nextBillingAmount?: number;

  @Metadata({ data: "json, name=next_billing_date" })
  nextBillingDate?: string;

  @Metadata({ data: "json, name=non_sso_groups_allowed" })
  nonSsoGroupsAllowed?: boolean;

  @Metadata({ data: "json, name=non_sso_users_allowed" })
  nonSsoUsersAllowed?: boolean;

  @Metadata({ data: "json, name=office_integration_available" })
  officeIntegrationAvailable?: boolean;

  @Metadata({ data: "json, name=oncehub_link" })
  oncehubLink?: string;

  @Metadata({ data: "json, name=opt_out_global" })
  optOutGlobal?: boolean;

  @Metadata({ data: "json, name=overage_notified_at" })
  overageNotifiedAt?: Date;

  @Metadata({ data: "json, name=overage_notify" })
  overageNotify?: boolean;

  @Metadata({ data: "json, name=overdue" })
  overdue?: boolean;

  @Metadata({ data: "json, name=password_min_length" })
  passwordMinLength?: number;

  @Metadata({ data: "json, name=password_require_letter" })
  passwordRequireLetter?: boolean;

  @Metadata({ data: "json, name=password_require_mixed" })
  passwordRequireMixed?: boolean;

  @Metadata({ data: "json, name=password_require_number" })
  passwordRequireNumber?: boolean;

  @Metadata({ data: "json, name=password_require_special" })
  passwordRequireSpecial?: boolean;

  @Metadata({ data: "json, name=password_require_unbreached" })
  passwordRequireUnbreached?: boolean;

  @Metadata({ data: "json, name=password_requirements_apply_to_bundles" })
  passwordRequirementsApplyToBundles?: boolean;

  @Metadata({ data: "json, name=password_validity_days" })
  passwordValidityDays?: number;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=reply_to_email" })
  replyToEmail?: string;

  @Metadata({ data: "json, name=require_2fa" })
  require2fa?: boolean;

  @Metadata({ data: "json, name=require_2fa_stop_time" })
  require2faStopTime?: Date;

  @Metadata({ data: "json, name=require_2fa_user_type" })
  require2faUserType?: SiteEntityRequire2faUserTypeEnum;

  @Metadata({ data: "json, name=session" })
  session?: SessionEntity;

  @Metadata({ data: "json, name=session_expiry" })
  sessionExpiry?: number;

  @Metadata({ data: "json, name=session_pinned_by_ip" })
  sessionPinnedByIp?: boolean;

  @Metadata({ data: "json, name=sftp_user_root_enabled" })
  sftpUserRootEnabled?: boolean;

  @Metadata({ data: "json, name=sharing_enabled" })
  sharingEnabled?: boolean;

  @Metadata({ data: "json, name=show_request_access_link" })
  showRequestAccessLink?: boolean;

  @Metadata({ data: "json, name=site_footer" })
  siteFooter?: string;

  @Metadata({ data: "json, name=site_header" })
  siteHeader?: string;

  @Metadata({ data: "json, name=smtp_address" })
  smtpAddress?: string;

  @Metadata({ data: "json, name=smtp_authentication" })
  smtpAuthentication?: string;

  @Metadata({ data: "json, name=smtp_from" })
  smtpFrom?: string;

  @Metadata({ data: "json, name=smtp_port" })
  smtpPort?: number;

  @Metadata({ data: "json, name=smtp_username" })
  smtpUsername?: string;

  @Metadata({ data: "json, name=ssl_required" })
  sslRequired?: boolean;

  @Metadata({ data: "json, name=subdomain" })
  subdomain?: string;

  @Metadata({ data: "json, name=switch_to_plan_date" })
  switchToPlanDate?: Date;

  @Metadata({ data: "json, name=tls_disabled" })
  tlsDisabled?: boolean;

  @Metadata({ data: "json, name=trial_days_left" })
  trialDaysLeft?: number;

  @Metadata({ data: "json, name=trial_until" })
  trialUntil?: Date;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @Metadata({ data: "json, name=use_provided_modified_at" })
  useProvidedModifiedAt?: boolean;

  @Metadata({ data: "json, name=user" })
  user?: UserEntity;

  @Metadata({ data: "json, name=user_lockout" })
  userLockout?: boolean;

  @Metadata({ data: "json, name=user_lockout_lock_period" })
  userLockoutLockPeriod?: number;

  @Metadata({ data: "json, name=user_lockout_tries" })
  userLockoutTries?: number;

  @Metadata({ data: "json, name=user_lockout_within" })
  userLockoutWithin?: number;

  @Metadata({ data: "json, name=user_requests_enabled" })
  userRequestsEnabled?: boolean;

  @Metadata({ data: "json, name=welcome_custom_text" })
  welcomeCustomText?: string;

  @Metadata({ data: "json, name=welcome_email_cc" })
  welcomeEmailCc?: string;

  @Metadata({ data: "json, name=welcome_email_enabled" })
  welcomeEmailEnabled?: boolean;

  @Metadata({ data: "json, name=welcome_screen" })
  welcomeScreen?: SiteEntityWelcomeScreenEnum;

  @Metadata({ data: "json, name=windows_mode_ftp" })
  windowsModeFtp?: boolean;
}
