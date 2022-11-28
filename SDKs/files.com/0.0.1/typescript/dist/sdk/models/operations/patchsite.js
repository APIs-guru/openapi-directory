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
import * as shared from "../shared";
var PatchSiteRequestBodyIcon128File = /** @class */ (function (_super) {
    __extends(PatchSiteRequestBodyIcon128File, _super);
    function PatchSiteRequestBodyIcon128File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PatchSiteRequestBodyIcon128File.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=icon128_file" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBodyIcon128File.prototype, "icon128File", void 0);
    return PatchSiteRequestBodyIcon128File;
}(SpeakeasyBase));
export { PatchSiteRequestBodyIcon128File };
var PatchSiteRequestBodyIcon16File = /** @class */ (function (_super) {
    __extends(PatchSiteRequestBodyIcon16File, _super);
    function PatchSiteRequestBodyIcon16File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PatchSiteRequestBodyIcon16File.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=icon16_file" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBodyIcon16File.prototype, "icon16File", void 0);
    return PatchSiteRequestBodyIcon16File;
}(SpeakeasyBase));
export { PatchSiteRequestBodyIcon16File };
var PatchSiteRequestBodyIcon32File = /** @class */ (function (_super) {
    __extends(PatchSiteRequestBodyIcon32File, _super);
    function PatchSiteRequestBodyIcon32File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PatchSiteRequestBodyIcon32File.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=icon32_file" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBodyIcon32File.prototype, "icon32File", void 0);
    return PatchSiteRequestBodyIcon32File;
}(SpeakeasyBase));
export { PatchSiteRequestBodyIcon32File };
var PatchSiteRequestBodyIcon48File = /** @class */ (function (_super) {
    __extends(PatchSiteRequestBodyIcon48File, _super);
    function PatchSiteRequestBodyIcon48File() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PatchSiteRequestBodyIcon48File.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=icon48_file" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBodyIcon48File.prototype, "icon48File", void 0);
    return PatchSiteRequestBodyIcon48File;
}(SpeakeasyBase));
export { PatchSiteRequestBodyIcon48File };
var PatchSiteRequestBodyLogoFile = /** @class */ (function (_super) {
    __extends(PatchSiteRequestBodyLogoFile, _super);
    function PatchSiteRequestBodyLogoFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PatchSiteRequestBodyLogoFile.prototype, "content", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=logo_file" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBodyLogoFile.prototype, "logoFile", void 0);
    return PatchSiteRequestBodyLogoFile;
}(SpeakeasyBase));
export { PatchSiteRequestBodyLogoFile };
var PatchSiteRequestBody = /** @class */ (function (_super) {
    __extends(PatchSiteRequestBody, _super);
    function PatchSiteRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allow_bundle_names" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "allowBundleNames", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allowed_2fa_method_sms" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "allowed2faMethodSms", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allowed_2fa_method_totp" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "allowed2faMethodTotp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allowed_2fa_method_u2f" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "allowed2faMethodU2f", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allowed_2fa_method_yubi" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "allowed2faMethodYubi", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allowed_countries" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "allowedCountries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allowed_ips" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "allowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ask_about_overwrites" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "askAboutOverwrites", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=bundle_expiration" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "bundleExpiration", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=bundle_password_required" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "bundlePasswordRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=bundle_require_share_recipient" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "bundleRequireShareRecipient", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=color2_left" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "color2Left", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=color2_link" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "color2Link", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=color2_text" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "color2Text", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=color2_top" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "color2Top", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=color2_top_text" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "color2TopText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=custom_namespace" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "customNamespace", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=days_to_retain_backups" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "daysToRetainBackups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=default_time_zone" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "defaultTimeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=desktop_app" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "desktopApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=desktop_app_session_ip_pinning" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "desktopAppSessionIpPinning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=desktop_app_session_lifetime" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "desktopAppSessionLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=disable_2fa_with_delay" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "disable2faWithDelay", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=disable_password_reset" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "disablePasswordReset", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=disable_users_from_inactivity_period_days" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "disableUsersFromInactivityPeriodDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=disallowed_countries" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "disallowedCountries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=domain" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "domain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=email" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=folder_permissions_groups_only" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "folderPermissionsGroupsOnly", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=icon128_delete" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "icon128Delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PatchSiteRequestBodyIcon128File)
    ], PatchSiteRequestBody.prototype, "icon128File", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=icon16_delete" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "icon16Delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PatchSiteRequestBodyIcon16File)
    ], PatchSiteRequestBody.prototype, "icon16File", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=icon32_delete" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "icon32Delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PatchSiteRequestBodyIcon32File)
    ], PatchSiteRequestBody.prototype, "icon32File", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=icon48_delete" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "icon48Delete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PatchSiteRequestBodyIcon48File)
    ], PatchSiteRequestBody.prototype, "icon48File", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=immutable_files" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "immutableFiles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=include_password_in_welcome_email" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "includePasswordInWelcomeEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=language" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_base_dn" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapBaseDn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_domain" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_enabled" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "ldapEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_group_action" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapGroupAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_group_exclusion" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapGroupExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_group_inclusion" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapGroupInclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_host" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_host_2" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapHost2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_host_3" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapHost3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_password_change" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapPasswordChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_password_change_confirmation" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapPasswordChangeConfirmation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_port" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "ldapPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_secure" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "ldapSecure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_type" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_user_action" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapUserAction", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_user_include_groups" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapUserIncludeGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_username" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ldap_username_field" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "ldapUsernameField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=login_help_text" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "loginHelpText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=logo_delete" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "logoDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PatchSiteRequestBodyLogoFile)
    ], PatchSiteRequestBody.prototype, "logoFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=max_prior_passwords" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "maxPriorPasswords", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=mobile_app" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "mobileApp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=mobile_app_session_ip_pinning" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "mobileAppSessionIpPinning", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=mobile_app_session_lifetime" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "mobileAppSessionLifetime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=non_sso_groups_allowed" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "nonSsoGroupsAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=non_sso_users_allowed" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "nonSsoUsersAllowed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=office_integration_available" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "officeIntegrationAvailable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=opt_out_global" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "optOutGlobal", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=overage_notify" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "overageNotify", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_min_length" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "passwordMinLength", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_require_letter" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "passwordRequireLetter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_require_mixed" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "passwordRequireMixed", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_require_number" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "passwordRequireNumber", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_require_special" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "passwordRequireSpecial", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_require_unbreached" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "passwordRequireUnbreached", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_requirements_apply_to_bundles" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "passwordRequirementsApplyToBundles", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_validity_days" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "passwordValidityDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=reply_to_email" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "replyToEmail", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=require_2fa" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "require2fa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=require_2fa_user_type" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "require2faUserType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=session_expiry" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "sessionExpiry", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=session_pinned_by_ip" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "sessionPinnedByIp", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=sftp_user_root_enabled" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "sftpUserRootEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=sharing_enabled" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "sharingEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=show_request_access_link" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "showRequestAccessLink", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=site_footer" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "siteFooter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=site_header" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "siteHeader", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=smtp_address" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "smtpAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=smtp_authentication" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "smtpAuthentication", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=smtp_from" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "smtpFrom", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=smtp_password" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "smtpPassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=smtp_port" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "smtpPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=smtp_username" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "smtpUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ssl_required" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=subdomain" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "subdomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=tls_disabled" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "tlsDisabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=use_provided_modified_at" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "useProvidedModifiedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_lockout" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "userLockout", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_lockout_lock_period" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "userLockoutLockPeriod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_lockout_tries" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "userLockoutTries", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_lockout_within" }),
        __metadata("design:type", Number)
    ], PatchSiteRequestBody.prototype, "userLockoutWithin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_requests_enabled" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "userRequestsEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=welcome_custom_text" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "welcomeCustomText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=welcome_email_cc" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "welcomeEmailCc", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=welcome_email_enabled" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "welcomeEmailEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=welcome_screen" }),
        __metadata("design:type", String)
    ], PatchSiteRequestBody.prototype, "welcomeScreen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=windows_mode_ftp" }),
        __metadata("design:type", Boolean)
    ], PatchSiteRequestBody.prototype, "windowsModeFtp", void 0);
    return PatchSiteRequestBody;
}(SpeakeasyBase));
export { PatchSiteRequestBody };
var PatchSiteRequest = /** @class */ (function (_super) {
    __extends(PatchSiteRequest, _super);
    function PatchSiteRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchSiteRequestBody)
    ], PatchSiteRequest.prototype, "request", void 0);
    return PatchSiteRequest;
}(SpeakeasyBase));
export { PatchSiteRequest };
var PatchSiteResponse = /** @class */ (function (_super) {
    __extends(PatchSiteResponse, _super);
    function PatchSiteResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchSiteResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SiteEntity)
    ], PatchSiteResponse.prototype, "siteEntity", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchSiteResponse.prototype, "statusCode", void 0);
    return PatchSiteResponse;
}(SpeakeasyBase));
export { PatchSiteResponse };
