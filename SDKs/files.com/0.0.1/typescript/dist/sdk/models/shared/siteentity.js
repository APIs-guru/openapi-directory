var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ImageEntity } from "./imageentity";
import { SessionEntity } from "./sessionentity";
import { UserEntity } from "./userentity";
export var SiteEntityRequire2faUserTypeEnum;
(function (SiteEntityRequire2faUserTypeEnum) {
    SiteEntityRequire2faUserTypeEnum["All"] = "all";
    SiteEntityRequire2faUserTypeEnum["FolderAndSiteAdmins"] = "folder_and_site_admins";
    SiteEntityRequire2faUserTypeEnum["SiteAdmins"] = "site_admins";
})(SiteEntityRequire2faUserTypeEnum || (SiteEntityRequire2faUserTypeEnum = {}));
export var SiteEntityWelcomeScreenEnum;
(function (SiteEntityWelcomeScreenEnum) {
    SiteEntityWelcomeScreenEnum["Enabled"] = "enabled";
    SiteEntityWelcomeScreenEnum["Hidden"] = "hidden";
    SiteEntityWelcomeScreenEnum["Disabled"] = "disabled";
})(SiteEntityWelcomeScreenEnum || (SiteEntityWelcomeScreenEnum = {}));
// SiteEntity
/**
 * Show site settings
**/
var SiteEntity = /** @class */ (function (_super) {
    __extends(SiteEntity, _super);
    function SiteEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin_user_id" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "adminUserId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allow_bundle_names" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "allowBundleNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_sms" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "allowed2faMethodSms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_totp" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "allowed2faMethodTotp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_u2f" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "allowed2faMethodU2f", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_2fa_method_yubi" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "allowed2faMethodYubi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_countries" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "allowedCountries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_ips" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "allowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ask_about_overwrites" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "askAboutOverwrites", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bundle_expiration" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "bundleExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bundle_password_required" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "bundlePasswordRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bundle_require_share_recipient" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "bundleRequireShareRecipient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color2_left" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "color2Left", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color2_link" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "color2Link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color2_text" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "color2Text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color2_top" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "color2Top", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=color2_top_text" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "color2TopText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=contact_name" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "contactName", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], SiteEntity.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=currency" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "currency", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=custom_namespace" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "customNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=days_to_retain_backups" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "daysToRetainBackups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=default_time_zone" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "defaultTimeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desktop_app" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "desktopApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desktop_app_session_ip_pinning" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "desktopAppSessionIpPinning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=desktop_app_session_lifetime" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "desktopAppSessionLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disable_notifications" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "disableNotifications", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disable_password_reset" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "disablePasswordReset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disable_users_from_inactivity_period_days" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "disableUsersFromInactivityPeriodDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disallowed_countries" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "disallowedCountries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=domain" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=folder_permissions_groups_only" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "folderPermissionsGroupsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=hipaa" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "hipaa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon128" }),
        __metadata("design:type", ImageEntity)
    ], SiteEntity.prototype, "icon128", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon16" }),
        __metadata("design:type", ImageEntity)
    ], SiteEntity.prototype, "icon16", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon32" }),
        __metadata("design:type", ImageEntity)
    ], SiteEntity.prototype, "icon32", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=icon48" }),
        __metadata("design:type", ImageEntity)
    ], SiteEntity.prototype, "icon48", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=immutable_files_set_at" }),
        __metadata("design:type", Date)
    ], SiteEntity.prototype, "immutableFilesSetAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=include_password_in_welcome_email" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "includePasswordInWelcomeEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_base_dn" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapBaseDn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_domain" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_enabled" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "ldapEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_group_action" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapGroupAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_group_exclusion" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapGroupExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_group_inclusion" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapGroupInclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_host" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_host_2" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapHost2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_host_3" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapHost3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_port" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "ldapPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_secure" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "ldapSecure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_type" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_user_action" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapUserAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_user_include_groups" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapUserIncludeGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_username" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_username_field" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "ldapUsernameField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=login_help_text" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "loginHelpText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo" }),
        __metadata("design:type", ImageEntity)
    ], SiteEntity.prototype, "logo", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=max_prior_passwords" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "maxPriorPasswords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobile_app" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "mobileApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobile_app_session_ip_pinning" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "mobileAppSessionIpPinning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=mobile_app_session_lifetime" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "mobileAppSessionLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_billing_amount" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "nextBillingAmount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=next_billing_date" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "nextBillingDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=non_sso_groups_allowed" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "nonSsoGroupsAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=non_sso_users_allowed" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "nonSsoUsersAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office_integration_available" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "officeIntegrationAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=oncehub_link" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "oncehubLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=opt_out_global" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "optOutGlobal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overage_notified_at" }),
        __metadata("design:type", Date)
    ], SiteEntity.prototype, "overageNotifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overage_notify" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "overageNotify", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=overdue" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "overdue", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password_min_length" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "passwordMinLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password_require_letter" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "passwordRequireLetter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password_require_mixed" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "passwordRequireMixed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password_require_number" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "passwordRequireNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password_require_special" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "passwordRequireSpecial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password_require_unbreached" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "passwordRequireUnbreached", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password_requirements_apply_to_bundles" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "passwordRequirementsApplyToBundles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password_validity_days" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "passwordValidityDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=phone" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "phone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=reply_to_email" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "replyToEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=require_2fa" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "require2fa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=require_2fa_stop_time" }),
        __metadata("design:type", Date)
    ], SiteEntity.prototype, "require2faStopTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=require_2fa_user_type" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "require2faUserType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=session" }),
        __metadata("design:type", SessionEntity)
    ], SiteEntity.prototype, "session", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=session_expiry" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "sessionExpiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=session_pinned_by_ip" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "sessionPinnedByIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sftp_user_root_enabled" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "sftpUserRootEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sharing_enabled" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "sharingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=show_request_access_link" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "showRequestAccessLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_footer" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "siteFooter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_header" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "siteHeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smtp_address" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "smtpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smtp_authentication" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "smtpAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smtp_from" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "smtpFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smtp_port" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "smtpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=smtp_username" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "smtpUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl_required" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subdomain" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "subdomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=switch_to_plan_date" }),
        __metadata("design:type", Date)
    ], SiteEntity.prototype, "switchToPlanDate", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=tls_disabled" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "tlsDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trial_days_left" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "trialDaysLeft", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=trial_until" }),
        __metadata("design:type", Date)
    ], SiteEntity.prototype, "trialUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=updated_at" }),
        __metadata("design:type", Date)
    ], SiteEntity.prototype, "updatedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=use_provided_modified_at" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "useProvidedModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user" }),
        __metadata("design:type", UserEntity)
    ], SiteEntity.prototype, "user", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_lockout" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "userLockout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_lockout_lock_period" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "userLockoutLockPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_lockout_tries" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "userLockoutTries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_lockout_within" }),
        __metadata("design:type", Number)
    ], SiteEntity.prototype, "userLockoutWithin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_requests_enabled" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "userRequestsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=welcome_custom_text" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "welcomeCustomText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=welcome_email_cc" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "welcomeEmailCc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=welcome_email_enabled" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "welcomeEmailEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=welcome_screen" }),
        __metadata("design:type", String)
    ], SiteEntity.prototype, "welcomeScreen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=windows_mode_ftp" }),
        __metadata("design:type", Boolean)
    ], SiteEntity.prototype, "windowsModeFtp", void 0);
    return SiteEntity;
}(SpeakeasyBase));
export { SiteEntity };
