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
export var SsoStrategyEntityDeprovisionBehaviorEnum;
(function (SsoStrategyEntityDeprovisionBehaviorEnum) {
    SsoStrategyEntityDeprovisionBehaviorEnum["Disable"] = "disable";
    SsoStrategyEntityDeprovisionBehaviorEnum["Delete"] = "delete";
})(SsoStrategyEntityDeprovisionBehaviorEnum || (SsoStrategyEntityDeprovisionBehaviorEnum = {}));
export var SsoStrategyEntityLdapUsernameFieldEnum;
(function (SsoStrategyEntityLdapUsernameFieldEnum) {
    SsoStrategyEntityLdapUsernameFieldEnum["SAmAccountName"] = "sAMAccountName";
    SsoStrategyEntityLdapUsernameFieldEnum["UserPrincipalName"] = "userPrincipalName";
})(SsoStrategyEntityLdapUsernameFieldEnum || (SsoStrategyEntityLdapUsernameFieldEnum = {}));
export var SsoStrategyEntityProtocolEnum;
(function (SsoStrategyEntityProtocolEnum) {
    SsoStrategyEntityProtocolEnum["Oauth2"] = "oauth2";
    SsoStrategyEntityProtocolEnum["UnusedOpenid2"] = "_unused_openid2";
    SsoStrategyEntityProtocolEnum["Saml"] = "saml";
    SsoStrategyEntityProtocolEnum["ActiveDirectory"] = "active_directory";
    SsoStrategyEntityProtocolEnum["OpenLdap"] = "open_ldap";
    SsoStrategyEntityProtocolEnum["Scim"] = "scim";
})(SsoStrategyEntityProtocolEnum || (SsoStrategyEntityProtocolEnum = {}));
export var SsoStrategyEntityProviderEnum;
(function (SsoStrategyEntityProviderEnum) {
    SsoStrategyEntityProviderEnum["Google"] = "google";
    SsoStrategyEntityProviderEnum["Auth0"] = "auth0";
    SsoStrategyEntityProviderEnum["Okta"] = "okta";
    SsoStrategyEntityProviderEnum["Atlassian"] = "atlassian";
    SsoStrategyEntityProviderEnum["Azure"] = "azure";
    SsoStrategyEntityProviderEnum["Box"] = "box";
    SsoStrategyEntityProviderEnum["Dropbox"] = "dropbox";
    SsoStrategyEntityProviderEnum["Slack"] = "slack";
    SsoStrategyEntityProviderEnum["UnusedUbuntu"] = "_unused_ubuntu";
    SsoStrategyEntityProviderEnum["Onelogin"] = "onelogin";
    SsoStrategyEntityProviderEnum["Saml"] = "saml";
    SsoStrategyEntityProviderEnum["Idaptive"] = "idaptive";
    SsoStrategyEntityProviderEnum["Ldap"] = "ldap";
    SsoStrategyEntityProviderEnum["Scim"] = "scim";
})(SsoStrategyEntityProviderEnum || (SsoStrategyEntityProviderEnum = {}));
export var SsoStrategyEntityScimAuthenticationMethodEnum;
(function (SsoStrategyEntityScimAuthenticationMethodEnum) {
    SsoStrategyEntityScimAuthenticationMethodEnum["None"] = "none";
    SsoStrategyEntityScimAuthenticationMethodEnum["Basic"] = "basic";
    SsoStrategyEntityScimAuthenticationMethodEnum["Token"] = "token";
})(SsoStrategyEntityScimAuthenticationMethodEnum || (SsoStrategyEntityScimAuthenticationMethodEnum = {}));
// SsoStrategyEntity
/**
 * List Sso Strategies
**/
var SsoStrategyEntity = /** @class */ (function (_super) {
    __extends(SsoStrategyEntity, _super);
    function SsoStrategyEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprovision_behavior" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "deprovisionBehavior", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprovision_groups" }),
        __metadata("design:type", Boolean)
    ], SsoStrategyEntity.prototype, "deprovisionGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=deprovision_users" }),
        __metadata("design:type", Boolean)
    ], SsoStrategyEntity.prototype, "deprovisionUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=enabled" }),
        __metadata("design:type", Boolean)
    ], SsoStrategyEntity.prototype, "enabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], SsoStrategyEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=label" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "label", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_base_dn" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "ldapBaseDn", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_domain" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "ldapDomain", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_host" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "ldapHost", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_host_2" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "ldapHost2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_host_3" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "ldapHost3", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_port" }),
        __metadata("design:type", Number)
    ], SsoStrategyEntity.prototype, "ldapPort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_secure" }),
        __metadata("design:type", Boolean)
    ], SsoStrategyEntity.prototype, "ldapSecure", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_username" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "ldapUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ldap_username_field" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "ldapUsernameField", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=logo_url" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "logoUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=protocol" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "protocol", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provider" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "provider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_attachments_permission" }),
        __metadata("design:type", Boolean)
    ], SsoStrategyEntity.prototype, "provisionAttachmentsPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_company" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "provisionCompany", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_dav_permission" }),
        __metadata("design:type", Boolean)
    ], SsoStrategyEntity.prototype, "provisionDavPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_email_signup_groups" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "provisionEmailSignupGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_ftp_permission" }),
        __metadata("design:type", Boolean)
    ], SsoStrategyEntity.prototype, "provisionFtpPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_group_default" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "provisionGroupDefault", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_group_exclusion" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "provisionGroupExclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_group_inclusion" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "provisionGroupInclusion", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_group_required" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "provisionGroupRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_groups" }),
        __metadata("design:type", Boolean)
    ], SsoStrategyEntity.prototype, "provisionGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_sftp_permission" }),
        __metadata("design:type", Boolean)
    ], SsoStrategyEntity.prototype, "provisionSftpPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_site_admin_groups" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "provisionSiteAdminGroups", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_time_zone" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "provisionTimeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=provision_users" }),
        __metadata("design:type", Boolean)
    ], SsoStrategyEntity.prototype, "provisionUsers", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saml_provider_cert_fingerprint" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "samlProviderCertFingerprint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saml_provider_issuer_url" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "samlProviderIssuerUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saml_provider_metadata_content" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "samlProviderMetadataContent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saml_provider_metadata_url" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "samlProviderMetadataUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saml_provider_slo_target_url" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "samlProviderSloTargetUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=saml_provider_sso_target_url" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "samlProviderSsoTargetUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scim_authentication_method" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "scimAuthenticationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scim_oauth_access_token" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "scimOauthAccessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scim_oauth_access_token_expires_at" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "scimOauthAccessTokenExpiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=scim_username" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "scimUsername", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subdomain" }),
        __metadata("design:type", String)
    ], SsoStrategyEntity.prototype, "subdomain", void 0);
    return SsoStrategyEntity;
}(SpeakeasyBase));
export { SsoStrategyEntity };
