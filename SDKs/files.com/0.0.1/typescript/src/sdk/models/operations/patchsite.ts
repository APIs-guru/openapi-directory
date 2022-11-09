import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PatchSiteRequestBodyIcon128File extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=icon128_file" })
  icon128File: string;
}


export class PatchSiteRequestBodyIcon16File extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=icon16_file" })
  icon16File: string;
}


export class PatchSiteRequestBodyIcon32File extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=icon32_file" })
  icon32File: string;
}


export class PatchSiteRequestBodyIcon48File extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=icon48_file" })
  icon48File: string;
}


export class PatchSiteRequestBodyLogoFile extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @Metadata({ data: "multipart_form, name=logo_file" })
  logoFile: string;
}


export class PatchSiteRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=allow_bundle_names" })
  allowBundleNames?: boolean;

  @Metadata({ data: "multipart_form, name=allowed_2fa_method_sms" })
  allowed2faMethodSms?: boolean;

  @Metadata({ data: "multipart_form, name=allowed_2fa_method_totp" })
  allowed2faMethodTotp?: boolean;

  @Metadata({ data: "multipart_form, name=allowed_2fa_method_u2f" })
  allowed2faMethodU2f?: boolean;

  @Metadata({ data: "multipart_form, name=allowed_2fa_method_yubi" })
  allowed2faMethodYubi?: boolean;

  @Metadata({ data: "multipart_form, name=allowed_countries" })
  allowedCountries?: string;

  @Metadata({ data: "multipart_form, name=allowed_ips" })
  allowedIps?: string;

  @Metadata({ data: "multipart_form, name=ask_about_overwrites" })
  askAboutOverwrites?: boolean;

  @Metadata({ data: "multipart_form, name=bundle_expiration" })
  bundleExpiration?: number;

  @Metadata({ data: "multipart_form, name=bundle_password_required" })
  bundlePasswordRequired?: boolean;

  @Metadata({ data: "multipart_form, name=bundle_require_share_recipient" })
  bundleRequireShareRecipient?: boolean;

  @Metadata({ data: "multipart_form, name=color2_left" })
  color2Left?: string;

  @Metadata({ data: "multipart_form, name=color2_link" })
  color2Link?: string;

  @Metadata({ data: "multipart_form, name=color2_text" })
  color2Text?: string;

  @Metadata({ data: "multipart_form, name=color2_top" })
  color2Top?: string;

  @Metadata({ data: "multipart_form, name=color2_top_text" })
  color2TopText?: string;

  @Metadata({ data: "multipart_form, name=custom_namespace" })
  customNamespace?: boolean;

  @Metadata({ data: "multipart_form, name=days_to_retain_backups" })
  daysToRetainBackups?: number;

  @Metadata({ data: "multipart_form, name=default_time_zone" })
  defaultTimeZone?: string;

  @Metadata({ data: "multipart_form, name=desktop_app" })
  desktopApp?: boolean;

  @Metadata({ data: "multipart_form, name=desktop_app_session_ip_pinning" })
  desktopAppSessionIpPinning?: boolean;

  @Metadata({ data: "multipart_form, name=desktop_app_session_lifetime" })
  desktopAppSessionLifetime?: number;

  @Metadata({ data: "multipart_form, name=disable_2fa_with_delay" })
  disable2faWithDelay?: boolean;

  @Metadata({ data: "multipart_form, name=disable_password_reset" })
  disablePasswordReset?: boolean;

  @Metadata({ data: "multipart_form, name=disable_users_from_inactivity_period_days" })
  disableUsersFromInactivityPeriodDays?: number;

  @Metadata({ data: "multipart_form, name=disallowed_countries" })
  disallowedCountries?: string;

  @Metadata({ data: "multipart_form, name=domain" })
  domain?: string;

  @Metadata({ data: "multipart_form, name=email" })
  email?: string;

  @Metadata({ data: "multipart_form, name=folder_permissions_groups_only" })
  folderPermissionsGroupsOnly?: boolean;

  @Metadata({ data: "multipart_form, name=icon128_delete" })
  icon128Delete?: boolean;

  @Metadata({ data: "multipart_form, file=true" })
  icon128File?: PatchSiteRequestBodyIcon128File;

  @Metadata({ data: "multipart_form, name=icon16_delete" })
  icon16Delete?: boolean;

  @Metadata({ data: "multipart_form, file=true" })
  icon16File?: PatchSiteRequestBodyIcon16File;

  @Metadata({ data: "multipart_form, name=icon32_delete" })
  icon32Delete?: boolean;

  @Metadata({ data: "multipart_form, file=true" })
  icon32File?: PatchSiteRequestBodyIcon32File;

  @Metadata({ data: "multipart_form, name=icon48_delete" })
  icon48Delete?: boolean;

  @Metadata({ data: "multipart_form, file=true" })
  icon48File?: PatchSiteRequestBodyIcon48File;

  @Metadata({ data: "multipart_form, name=immutable_files" })
  immutableFiles?: boolean;

  @Metadata({ data: "multipart_form, name=include_password_in_welcome_email" })
  includePasswordInWelcomeEmail?: boolean;

  @Metadata({ data: "multipart_form, name=language" })
  language?: string;

  @Metadata({ data: "multipart_form, name=ldap_base_dn" })
  ldapBaseDn?: string;

  @Metadata({ data: "multipart_form, name=ldap_domain" })
  ldapDomain?: string;

  @Metadata({ data: "multipart_form, name=ldap_enabled" })
  ldapEnabled?: boolean;

  @Metadata({ data: "multipart_form, name=ldap_group_action" })
  ldapGroupAction?: string;

  @Metadata({ data: "multipart_form, name=ldap_group_exclusion" })
  ldapGroupExclusion?: string;

  @Metadata({ data: "multipart_form, name=ldap_group_inclusion" })
  ldapGroupInclusion?: string;

  @Metadata({ data: "multipart_form, name=ldap_host" })
  ldapHost?: string;

  @Metadata({ data: "multipart_form, name=ldap_host_2" })
  ldapHost2?: string;

  @Metadata({ data: "multipart_form, name=ldap_host_3" })
  ldapHost3?: string;

  @Metadata({ data: "multipart_form, name=ldap_password_change" })
  ldapPasswordChange?: string;

  @Metadata({ data: "multipart_form, name=ldap_password_change_confirmation" })
  ldapPasswordChangeConfirmation?: string;

  @Metadata({ data: "multipart_form, name=ldap_port" })
  ldapPort?: number;

  @Metadata({ data: "multipart_form, name=ldap_secure" })
  ldapSecure?: boolean;

  @Metadata({ data: "multipart_form, name=ldap_type" })
  ldapType?: string;

  @Metadata({ data: "multipart_form, name=ldap_user_action" })
  ldapUserAction?: string;

  @Metadata({ data: "multipart_form, name=ldap_user_include_groups" })
  ldapUserIncludeGroups?: string;

  @Metadata({ data: "multipart_form, name=ldap_username" })
  ldapUsername?: string;

  @Metadata({ data: "multipart_form, name=ldap_username_field" })
  ldapUsernameField?: string;

  @Metadata({ data: "multipart_form, name=login_help_text" })
  loginHelpText?: string;

  @Metadata({ data: "multipart_form, name=logo_delete" })
  logoDelete?: boolean;

  @Metadata({ data: "multipart_form, file=true" })
  logoFile?: PatchSiteRequestBodyLogoFile;

  @Metadata({ data: "multipart_form, name=max_prior_passwords" })
  maxPriorPasswords?: number;

  @Metadata({ data: "multipart_form, name=mobile_app" })
  mobileApp?: boolean;

  @Metadata({ data: "multipart_form, name=mobile_app_session_ip_pinning" })
  mobileAppSessionIpPinning?: boolean;

  @Metadata({ data: "multipart_form, name=mobile_app_session_lifetime" })
  mobileAppSessionLifetime?: number;

  @Metadata({ data: "multipart_form, name=name" })
  name?: string;

  @Metadata({ data: "multipart_form, name=non_sso_groups_allowed" })
  nonSsoGroupsAllowed?: boolean;

  @Metadata({ data: "multipart_form, name=non_sso_users_allowed" })
  nonSsoUsersAllowed?: boolean;

  @Metadata({ data: "multipart_form, name=office_integration_available" })
  officeIntegrationAvailable?: boolean;

  @Metadata({ data: "multipart_form, name=opt_out_global" })
  optOutGlobal?: boolean;

  @Metadata({ data: "multipart_form, name=overage_notify" })
  overageNotify?: boolean;

  @Metadata({ data: "multipart_form, name=password_min_length" })
  passwordMinLength?: number;

  @Metadata({ data: "multipart_form, name=password_require_letter" })
  passwordRequireLetter?: boolean;

  @Metadata({ data: "multipart_form, name=password_require_mixed" })
  passwordRequireMixed?: boolean;

  @Metadata({ data: "multipart_form, name=password_require_number" })
  passwordRequireNumber?: boolean;

  @Metadata({ data: "multipart_form, name=password_require_special" })
  passwordRequireSpecial?: boolean;

  @Metadata({ data: "multipart_form, name=password_require_unbreached" })
  passwordRequireUnbreached?: boolean;

  @Metadata({ data: "multipart_form, name=password_requirements_apply_to_bundles" })
  passwordRequirementsApplyToBundles?: boolean;

  @Metadata({ data: "multipart_form, name=password_validity_days" })
  passwordValidityDays?: number;

  @Metadata({ data: "multipart_form, name=reply_to_email" })
  replyToEmail?: string;

  @Metadata({ data: "multipart_form, name=require_2fa" })
  require2fa?: boolean;

  @Metadata({ data: "multipart_form, name=require_2fa_user_type" })
  require2faUserType?: string;

  @Metadata({ data: "multipart_form, name=session_expiry" })
  sessionExpiry?: number;

  @Metadata({ data: "multipart_form, name=session_pinned_by_ip" })
  sessionPinnedByIp?: boolean;

  @Metadata({ data: "multipart_form, name=sftp_user_root_enabled" })
  sftpUserRootEnabled?: boolean;

  @Metadata({ data: "multipart_form, name=sharing_enabled" })
  sharingEnabled?: boolean;

  @Metadata({ data: "multipart_form, name=show_request_access_link" })
  showRequestAccessLink?: boolean;

  @Metadata({ data: "multipart_form, name=site_footer" })
  siteFooter?: string;

  @Metadata({ data: "multipart_form, name=site_header" })
  siteHeader?: string;

  @Metadata({ data: "multipart_form, name=smtp_address" })
  smtpAddress?: string;

  @Metadata({ data: "multipart_form, name=smtp_authentication" })
  smtpAuthentication?: string;

  @Metadata({ data: "multipart_form, name=smtp_from" })
  smtpFrom?: string;

  @Metadata({ data: "multipart_form, name=smtp_password" })
  smtpPassword?: string;

  @Metadata({ data: "multipart_form, name=smtp_port" })
  smtpPort?: number;

  @Metadata({ data: "multipart_form, name=smtp_username" })
  smtpUsername?: string;

  @Metadata({ data: "multipart_form, name=ssl_required" })
  sslRequired?: boolean;

  @Metadata({ data: "multipart_form, name=subdomain" })
  subdomain?: string;

  @Metadata({ data: "multipart_form, name=tls_disabled" })
  tlsDisabled?: boolean;

  @Metadata({ data: "multipart_form, name=use_provided_modified_at" })
  useProvidedModifiedAt?: boolean;

  @Metadata({ data: "multipart_form, name=user_lockout" })
  userLockout?: boolean;

  @Metadata({ data: "multipart_form, name=user_lockout_lock_period" })
  userLockoutLockPeriod?: number;

  @Metadata({ data: "multipart_form, name=user_lockout_tries" })
  userLockoutTries?: number;

  @Metadata({ data: "multipart_form, name=user_lockout_within" })
  userLockoutWithin?: number;

  @Metadata({ data: "multipart_form, name=user_requests_enabled" })
  userRequestsEnabled?: boolean;

  @Metadata({ data: "multipart_form, name=welcome_custom_text" })
  welcomeCustomText?: string;

  @Metadata({ data: "multipart_form, name=welcome_email_cc" })
  welcomeEmailCc?: string;

  @Metadata({ data: "multipart_form, name=welcome_email_enabled" })
  welcomeEmailEnabled?: boolean;

  @Metadata({ data: "multipart_form, name=welcome_screen" })
  welcomeScreen?: string;

  @Metadata({ data: "multipart_form, name=windows_mode_ftp" })
  windowsModeFtp?: boolean;
}


export class PatchSiteRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchSiteRequestBody;
}


export class PatchSiteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  siteEntity?: shared.SiteEntity;

  @Metadata()
  statusCode: number;
}
