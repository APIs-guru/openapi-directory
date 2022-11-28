import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PatchSiteRequestBodyIcon128File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=icon128_file" })
  icon128File: string;
}


export class PatchSiteRequestBodyIcon16File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=icon16_file" })
  icon16File: string;
}


export class PatchSiteRequestBodyIcon32File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=icon32_file" })
  icon32File: string;
}


export class PatchSiteRequestBodyIcon48File extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=icon48_file" })
  icon48File: string;
}


export class PatchSiteRequestBodyLogoFile extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=logo_file" })
  logoFile: string;
}


export class PatchSiteRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=allow_bundle_names" })
  allowBundleNames?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=allowed_2fa_method_sms" })
  allowed2faMethodSms?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=allowed_2fa_method_totp" })
  allowed2faMethodTotp?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=allowed_2fa_method_u2f" })
  allowed2faMethodU2f?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=allowed_2fa_method_yubi" })
  allowed2faMethodYubi?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=allowed_countries" })
  allowedCountries?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=allowed_ips" })
  allowedIps?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ask_about_overwrites" })
  askAboutOverwrites?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=bundle_expiration" })
  bundleExpiration?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=bundle_password_required" })
  bundlePasswordRequired?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=bundle_require_share_recipient" })
  bundleRequireShareRecipient?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=color2_left" })
  color2Left?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=color2_link" })
  color2Link?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=color2_text" })
  color2Text?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=color2_top" })
  color2Top?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=color2_top_text" })
  color2TopText?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=custom_namespace" })
  customNamespace?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=days_to_retain_backups" })
  daysToRetainBackups?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=default_time_zone" })
  defaultTimeZone?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=desktop_app" })
  desktopApp?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=desktop_app_session_ip_pinning" })
  desktopAppSessionIpPinning?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=desktop_app_session_lifetime" })
  desktopAppSessionLifetime?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=disable_2fa_with_delay" })
  disable2faWithDelay?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=disable_password_reset" })
  disablePasswordReset?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=disable_users_from_inactivity_period_days" })
  disableUsersFromInactivityPeriodDays?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=disallowed_countries" })
  disallowedCountries?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=folder_permissions_groups_only" })
  folderPermissionsGroupsOnly?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=icon128_delete" })
  icon128Delete?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  icon128File?: PatchSiteRequestBodyIcon128File;

  @SpeakeasyMetadata({ data: "multipart_form, name=icon16_delete" })
  icon16Delete?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  icon16File?: PatchSiteRequestBodyIcon16File;

  @SpeakeasyMetadata({ data: "multipart_form, name=icon32_delete" })
  icon32Delete?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  icon32File?: PatchSiteRequestBodyIcon32File;

  @SpeakeasyMetadata({ data: "multipart_form, name=icon48_delete" })
  icon48Delete?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  icon48File?: PatchSiteRequestBodyIcon48File;

  @SpeakeasyMetadata({ data: "multipart_form, name=immutable_files" })
  immutableFiles?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=include_password_in_welcome_email" })
  includePasswordInWelcomeEmail?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_base_dn" })
  ldapBaseDn?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_domain" })
  ldapDomain?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_enabled" })
  ldapEnabled?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_group_action" })
  ldapGroupAction?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_group_exclusion" })
  ldapGroupExclusion?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_group_inclusion" })
  ldapGroupInclusion?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_host" })
  ldapHost?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_host_2" })
  ldapHost2?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_host_3" })
  ldapHost3?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_password_change" })
  ldapPasswordChange?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_password_change_confirmation" })
  ldapPasswordChangeConfirmation?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_port" })
  ldapPort?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_secure" })
  ldapSecure?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_type" })
  ldapType?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_user_action" })
  ldapUserAction?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_user_include_groups" })
  ldapUserIncludeGroups?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_username" })
  ldapUsername?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ldap_username_field" })
  ldapUsernameField?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=login_help_text" })
  loginHelpText?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=logo_delete" })
  logoDelete?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  logoFile?: PatchSiteRequestBodyLogoFile;

  @SpeakeasyMetadata({ data: "multipart_form, name=max_prior_passwords" })
  maxPriorPasswords?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=mobile_app" })
  mobileApp?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=mobile_app_session_ip_pinning" })
  mobileAppSessionIpPinning?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=mobile_app_session_lifetime" })
  mobileAppSessionLifetime?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=non_sso_groups_allowed" })
  nonSsoGroupsAllowed?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=non_sso_users_allowed" })
  nonSsoUsersAllowed?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=office_integration_available" })
  officeIntegrationAvailable?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=opt_out_global" })
  optOutGlobal?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=overage_notify" })
  overageNotify?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=password_min_length" })
  passwordMinLength?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=password_require_letter" })
  passwordRequireLetter?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=password_require_mixed" })
  passwordRequireMixed?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=password_require_number" })
  passwordRequireNumber?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=password_require_special" })
  passwordRequireSpecial?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=password_require_unbreached" })
  passwordRequireUnbreached?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=password_requirements_apply_to_bundles" })
  passwordRequirementsApplyToBundles?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=password_validity_days" })
  passwordValidityDays?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=reply_to_email" })
  replyToEmail?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=require_2fa" })
  require2fa?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=require_2fa_user_type" })
  require2faUserType?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=session_expiry" })
  sessionExpiry?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=session_pinned_by_ip" })
  sessionPinnedByIp?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=sftp_user_root_enabled" })
  sftpUserRootEnabled?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=sharing_enabled" })
  sharingEnabled?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=show_request_access_link" })
  showRequestAccessLink?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=site_footer" })
  siteFooter?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=site_header" })
  siteHeader?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=smtp_address" })
  smtpAddress?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=smtp_authentication" })
  smtpAuthentication?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=smtp_from" })
  smtpFrom?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=smtp_password" })
  smtpPassword?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=smtp_port" })
  smtpPort?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=smtp_username" })
  smtpUsername?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=ssl_required" })
  sslRequired?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=subdomain" })
  subdomain?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=tls_disabled" })
  tlsDisabled?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=use_provided_modified_at" })
  useProvidedModifiedAt?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_lockout" })
  userLockout?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_lockout_lock_period" })
  userLockoutLockPeriod?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_lockout_tries" })
  userLockoutTries?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_lockout_within" })
  userLockoutWithin?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=user_requests_enabled" })
  userRequestsEnabled?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=welcome_custom_text" })
  welcomeCustomText?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=welcome_email_cc" })
  welcomeEmailCc?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=welcome_email_enabled" })
  welcomeEmailEnabled?: boolean;

  @SpeakeasyMetadata({ data: "multipart_form, name=welcome_screen" })
  welcomeScreen?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=windows_mode_ftp" })
  windowsModeFtp?: boolean;
}


export class PatchSiteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PatchSiteRequestBody;
}


export class PatchSiteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  siteEntity?: shared.SiteEntity;

  @SpeakeasyMetadata()
  statusCode: number;
}
