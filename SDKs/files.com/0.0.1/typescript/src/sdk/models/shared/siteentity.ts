import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageEntity } from "./imageentity";
import { SessionEntity } from "./sessionentity";
import { UserEntity } from "./userentity";


export enum SiteEntityRequire2faUserTypeEnum {
    All = "all",
    FolderAndSiteAdmins = "folder_and_site_admins",
    SiteAdmins = "site_admins"
}

export enum SiteEntityWelcomeScreenEnum {
    Enabled = "enabled",
    Hidden = "hidden",
    Disabled = "disabled"
}


// SiteEntity
/** 
 * Show site settings
**/
export class SiteEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin_user_id" })
  adminUserId?: number;

  @SpeakeasyMetadata({ data: "json, name=allow_bundle_names" })
  allowBundleNames?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_sms" })
  allowed2faMethodSms?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_totp" })
  allowed2faMethodTotp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_u2f" })
  allowed2faMethodU2f?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_yubi" })
  allowed2faMethodYubi?: boolean;

  @SpeakeasyMetadata({ data: "json, name=allowed_countries" })
  allowedCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=allowed_ips" })
  allowedIps?: string;

  @SpeakeasyMetadata({ data: "json, name=ask_about_overwrites" })
  askAboutOverwrites?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bundle_expiration" })
  bundleExpiration?: number;

  @SpeakeasyMetadata({ data: "json, name=bundle_password_required" })
  bundlePasswordRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=bundle_require_share_recipient" })
  bundleRequireShareRecipient?: boolean;

  @SpeakeasyMetadata({ data: "json, name=color2_left" })
  color2Left?: string;

  @SpeakeasyMetadata({ data: "json, name=color2_link" })
  color2Link?: string;

  @SpeakeasyMetadata({ data: "json, name=color2_text" })
  color2Text?: string;

  @SpeakeasyMetadata({ data: "json, name=color2_top" })
  color2Top?: string;

  @SpeakeasyMetadata({ data: "json, name=color2_top_text" })
  color2TopText?: string;

  @SpeakeasyMetadata({ data: "json, name=contact_name" })
  contactName?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=currency" })
  currency?: string;

  @SpeakeasyMetadata({ data: "json, name=custom_namespace" })
  customNamespace?: boolean;

  @SpeakeasyMetadata({ data: "json, name=days_to_retain_backups" })
  daysToRetainBackups?: number;

  @SpeakeasyMetadata({ data: "json, name=default_time_zone" })
  defaultTimeZone?: string;

  @SpeakeasyMetadata({ data: "json, name=desktop_app" })
  desktopApp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=desktop_app_session_ip_pinning" })
  desktopAppSessionIpPinning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=desktop_app_session_lifetime" })
  desktopAppSessionLifetime?: number;

  @SpeakeasyMetadata({ data: "json, name=disable_notifications" })
  disableNotifications?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disable_password_reset" })
  disablePasswordReset?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disable_users_from_inactivity_period_days" })
  disableUsersFromInactivityPeriodDays?: number;

  @SpeakeasyMetadata({ data: "json, name=disallowed_countries" })
  disallowedCountries?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=folder_permissions_groups_only" })
  folderPermissionsGroupsOnly?: boolean;

  @SpeakeasyMetadata({ data: "json, name=hipaa" })
  hipaa?: boolean;

  @SpeakeasyMetadata({ data: "json, name=icon128" })
  icon128?: ImageEntity;

  @SpeakeasyMetadata({ data: "json, name=icon16" })
  icon16?: ImageEntity;

  @SpeakeasyMetadata({ data: "json, name=icon32" })
  icon32?: ImageEntity;

  @SpeakeasyMetadata({ data: "json, name=icon48" })
  icon48?: ImageEntity;

  @SpeakeasyMetadata({ data: "json, name=immutable_files_set_at" })
  immutableFilesSetAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=include_password_in_welcome_email" })
  includePasswordInWelcomeEmail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_base_dn" })
  ldapBaseDn?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_domain" })
  ldapDomain?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_enabled" })
  ldapEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ldap_group_action" })
  ldapGroupAction?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_group_exclusion" })
  ldapGroupExclusion?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_group_inclusion" })
  ldapGroupInclusion?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_host" })
  ldapHost?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_host_2" })
  ldapHost2?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_host_3" })
  ldapHost3?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_port" })
  ldapPort?: number;

  @SpeakeasyMetadata({ data: "json, name=ldap_secure" })
  ldapSecure?: boolean;

  @SpeakeasyMetadata({ data: "json, name=ldap_type" })
  ldapType?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_user_action" })
  ldapUserAction?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_user_include_groups" })
  ldapUserIncludeGroups?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_username" })
  ldapUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=ldap_username_field" })
  ldapUsernameField?: string;

  @SpeakeasyMetadata({ data: "json, name=login_help_text" })
  loginHelpText?: string;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: ImageEntity;

  @SpeakeasyMetadata({ data: "json, name=max_prior_passwords" })
  maxPriorPasswords?: number;

  @SpeakeasyMetadata({ data: "json, name=mobile_app" })
  mobileApp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mobile_app_session_ip_pinning" })
  mobileAppSessionIpPinning?: boolean;

  @SpeakeasyMetadata({ data: "json, name=mobile_app_session_lifetime" })
  mobileAppSessionLifetime?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=next_billing_amount" })
  nextBillingAmount?: number;

  @SpeakeasyMetadata({ data: "json, name=next_billing_date" })
  nextBillingDate?: string;

  @SpeakeasyMetadata({ data: "json, name=non_sso_groups_allowed" })
  nonSsoGroupsAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=non_sso_users_allowed" })
  nonSsoUsersAllowed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=office_integration_available" })
  officeIntegrationAvailable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=oncehub_link" })
  oncehubLink?: string;

  @SpeakeasyMetadata({ data: "json, name=opt_out_global" })
  optOutGlobal?: boolean;

  @SpeakeasyMetadata({ data: "json, name=overage_notified_at" })
  overageNotifiedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=overage_notify" })
  overageNotify?: boolean;

  @SpeakeasyMetadata({ data: "json, name=overdue" })
  overdue?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password_min_length" })
  passwordMinLength?: number;

  @SpeakeasyMetadata({ data: "json, name=password_require_letter" })
  passwordRequireLetter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password_require_mixed" })
  passwordRequireMixed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password_require_number" })
  passwordRequireNumber?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password_require_special" })
  passwordRequireSpecial?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password_require_unbreached" })
  passwordRequireUnbreached?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password_requirements_apply_to_bundles" })
  passwordRequirementsApplyToBundles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=password_validity_days" })
  passwordValidityDays?: number;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=reply_to_email" })
  replyToEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=require_2fa" })
  require2fa?: boolean;

  @SpeakeasyMetadata({ data: "json, name=require_2fa_stop_time" })
  require2faStopTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=require_2fa_user_type" })
  require2faUserType?: SiteEntityRequire2faUserTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=session" })
  session?: SessionEntity;

  @SpeakeasyMetadata({ data: "json, name=session_expiry" })
  sessionExpiry?: number;

  @SpeakeasyMetadata({ data: "json, name=session_pinned_by_ip" })
  sessionPinnedByIp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sftp_user_root_enabled" })
  sftpUserRootEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=sharing_enabled" })
  sharingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=show_request_access_link" })
  showRequestAccessLink?: boolean;

  @SpeakeasyMetadata({ data: "json, name=site_footer" })
  siteFooter?: string;

  @SpeakeasyMetadata({ data: "json, name=site_header" })
  siteHeader?: string;

  @SpeakeasyMetadata({ data: "json, name=smtp_address" })
  smtpAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=smtp_authentication" })
  smtpAuthentication?: string;

  @SpeakeasyMetadata({ data: "json, name=smtp_from" })
  smtpFrom?: string;

  @SpeakeasyMetadata({ data: "json, name=smtp_port" })
  smtpPort?: number;

  @SpeakeasyMetadata({ data: "json, name=smtp_username" })
  smtpUsername?: string;

  @SpeakeasyMetadata({ data: "json, name=ssl_required" })
  sslRequired?: boolean;

  @SpeakeasyMetadata({ data: "json, name=subdomain" })
  subdomain?: string;

  @SpeakeasyMetadata({ data: "json, name=switch_to_plan_date" })
  switchToPlanDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=tls_disabled" })
  tlsDisabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=trial_days_left" })
  trialDaysLeft?: number;

  @SpeakeasyMetadata({ data: "json, name=trial_until" })
  trialUntil?: Date;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=use_provided_modified_at" })
  useProvidedModifiedAt?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: UserEntity;

  @SpeakeasyMetadata({ data: "json, name=user_lockout" })
  userLockout?: boolean;

  @SpeakeasyMetadata({ data: "json, name=user_lockout_lock_period" })
  userLockoutLockPeriod?: number;

  @SpeakeasyMetadata({ data: "json, name=user_lockout_tries" })
  userLockoutTries?: number;

  @SpeakeasyMetadata({ data: "json, name=user_lockout_within" })
  userLockoutWithin?: number;

  @SpeakeasyMetadata({ data: "json, name=user_requests_enabled" })
  userRequestsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=welcome_custom_text" })
  welcomeCustomText?: string;

  @SpeakeasyMetadata({ data: "json, name=welcome_email_cc" })
  welcomeEmailCc?: string;

  @SpeakeasyMetadata({ data: "json, name=welcome_email_enabled" })
  welcomeEmailEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=welcome_screen" })
  welcomeScreen?: SiteEntityWelcomeScreenEnum;

  @SpeakeasyMetadata({ data: "json, name=windows_mode_ftp" })
  windowsModeFtp?: boolean;
}
