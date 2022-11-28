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
export var UserEntityAuthenticationMethodEnum;
(function (UserEntityAuthenticationMethodEnum) {
    UserEntityAuthenticationMethodEnum["Password"] = "password";
    UserEntityAuthenticationMethodEnum["UnusedFormerLdap"] = "unused_former_ldap";
    UserEntityAuthenticationMethodEnum["Sso"] = "sso";
    UserEntityAuthenticationMethodEnum["None"] = "none";
    UserEntityAuthenticationMethodEnum["EmailSignup"] = "email_signup";
})(UserEntityAuthenticationMethodEnum || (UserEntityAuthenticationMethodEnum = {}));
export var UserEntityRequire2faEnum;
(function (UserEntityRequire2faEnum) {
    UserEntityRequire2faEnum["UseSystemSetting"] = "use_system_setting";
    UserEntityRequire2faEnum["AlwaysRequire"] = "always_require";
    UserEntityRequire2faEnum["NeverRequire"] = "never_require";
})(UserEntityRequire2faEnum || (UserEntityRequire2faEnum = {}));
export var UserEntitySslRequiredEnum;
(function (UserEntitySslRequiredEnum) {
    UserEntitySslRequiredEnum["UseSystemSetting"] = "use_system_setting";
    UserEntitySslRequiredEnum["AlwaysRequire"] = "always_require";
    UserEntitySslRequiredEnum["NeverRequire"] = "never_require";
})(UserEntitySslRequiredEnum || (UserEntitySslRequiredEnum = {}));
// UserEntity
/**
 * Create User
**/
var UserEntity = /** @class */ (function (_super) {
    __extends(UserEntity, _super);
    function UserEntity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=active_2fa" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "active2fa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=admin_group_ids" }),
        __metadata("design:type", Array)
    ], UserEntity.prototype, "adminGroupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=allowed_ips" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "allowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=api_keys_count" }),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "apiKeysCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=attachments_permission" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "attachmentsPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authenticate_until" }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "authenticateUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=authentication_method" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "authenticationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=avatar_url" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "avatarUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=billing_permission" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "billingPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bypass_inactive_disable" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "bypassInactiveDisable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=bypass_site_allowed_ips" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "bypassSiteAllowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=company" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=created_at" }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "createdAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=dav_permission" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "davPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=disabled" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=externally_managed" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "externallyManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ftp_permission" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "ftpPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=group_ids" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=header_text" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "headerText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=language" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_login_at" }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "lastLoginAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=last_protocol_cipher" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "lastProtocolCipher", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=lockout_expires" }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "lockoutExpires", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notes" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=notification_daily_send_time" }),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "notificationDailySendTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=office_integration_enabled" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "officeIntegrationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password_set_at" }),
        __metadata("design:type", Date)
    ], UserEntity.prototype, "passwordSetAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=password_validity_days" }),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "passwordValidityDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=public_keys_count" }),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "publicKeysCount", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=receive_admin_alerts" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "receiveAdminAlerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=require_2fa" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "require2fa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=require_password_change" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "requirePasswordChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=restapi_permission" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "restapiPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=self_managed" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "selfManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sftp_permission" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "sftpPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=skip_welcome_screen" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "skipWelcomeScreen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ssl_required" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sso_strategy_id" }),
        __metadata("design:type", Number)
    ], UserEntity.prototype, "ssoStrategyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=subscribe_to_newsletter" }),
        __metadata("design:type", Boolean)
    ], UserEntity.prototype, "subscribeToNewsletter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=time_zone" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=type_of_2fa" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "typeOf2fa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_root" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "userRoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=username" }),
        __metadata("design:type", String)
    ], UserEntity.prototype, "username", void 0);
    return UserEntity;
}(SpeakeasyBase));
export { UserEntity };
