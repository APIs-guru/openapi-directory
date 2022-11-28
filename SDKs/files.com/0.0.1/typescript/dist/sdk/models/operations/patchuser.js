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
export var PatchUserRequestBodyAuthenticationMethodEnum;
(function (PatchUserRequestBodyAuthenticationMethodEnum) {
    PatchUserRequestBodyAuthenticationMethodEnum["Password"] = "password";
    PatchUserRequestBodyAuthenticationMethodEnum["UnusedFormerLdap"] = "unused_former_ldap";
    PatchUserRequestBodyAuthenticationMethodEnum["Sso"] = "sso";
    PatchUserRequestBodyAuthenticationMethodEnum["None"] = "none";
    PatchUserRequestBodyAuthenticationMethodEnum["EmailSignup"] = "email_signup";
})(PatchUserRequestBodyAuthenticationMethodEnum || (PatchUserRequestBodyAuthenticationMethodEnum = {}));
var PatchUserRequestBodyAvatarFile = /** @class */ (function (_super) {
    __extends(PatchUserRequestBodyAvatarFile, _super);
    function PatchUserRequestBodyAvatarFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=avatar_file" }),
        __metadata("design:type", String)
    ], PatchUserRequestBodyAvatarFile.prototype, "avatarFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PatchUserRequestBodyAvatarFile.prototype, "content", void 0);
    return PatchUserRequestBodyAvatarFile;
}(SpeakeasyBase));
export { PatchUserRequestBodyAvatarFile };
export var PatchUserRequestBodyRequire2faEnum;
(function (PatchUserRequestBodyRequire2faEnum) {
    PatchUserRequestBodyRequire2faEnum["UseSystemSetting"] = "use_system_setting";
    PatchUserRequestBodyRequire2faEnum["AlwaysRequire"] = "always_require";
    PatchUserRequestBodyRequire2faEnum["NeverRequire"] = "never_require";
})(PatchUserRequestBodyRequire2faEnum || (PatchUserRequestBodyRequire2faEnum = {}));
export var PatchUserRequestBodySslRequiredEnum;
(function (PatchUserRequestBodySslRequiredEnum) {
    PatchUserRequestBodySslRequiredEnum["UseSystemSetting"] = "use_system_setting";
    PatchUserRequestBodySslRequiredEnum["AlwaysRequire"] = "always_require";
    PatchUserRequestBodySslRequiredEnum["NeverRequire"] = "never_require";
})(PatchUserRequestBodySslRequiredEnum || (PatchUserRequestBodySslRequiredEnum = {}));
var PatchUserRequestBody = /** @class */ (function (_super) {
    __extends(PatchUserRequestBody, _super);
    function PatchUserRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allowed_ips" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "allowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=announcements_read" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "announcementsRead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=attachments_permission" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "attachmentsPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=authenticate_until" }),
        __metadata("design:type", Date)
    ], PatchUserRequestBody.prototype, "authenticateUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=authentication_method" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "authenticationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=avatar_delete" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "avatarDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PatchUserRequestBodyAvatarFile)
    ], PatchUserRequestBody.prototype, "avatarFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=billing_permission" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "billingPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=bypass_inactive_disable" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "bypassInactiveDisable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=bypass_site_allowed_ips" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "bypassSiteAllowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=change_password" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "changePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=change_password_confirmation" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "changePasswordConfirmation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=company" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=dav_permission" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "davPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=disabled" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=email" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ftp_permission" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "ftpPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=grant_permission" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "grantPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=group_id" }),
        __metadata("design:type", Number)
    ], PatchUserRequestBody.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=group_ids" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=header_text" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "headerText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=language" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=notes" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=notification_daily_send_time" }),
        __metadata("design:type", Number)
    ], PatchUserRequestBody.prototype, "notificationDailySendTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=office_integration_enabled" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "officeIntegrationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_confirmation" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "passwordConfirmation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_validity_days" }),
        __metadata("design:type", Number)
    ], PatchUserRequestBody.prototype, "passwordValidityDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=receive_admin_alerts" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "receiveAdminAlerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=require_2fa" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "require2fa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=require_password_change" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "requirePasswordChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=restapi_permission" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "restapiPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=self_managed" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "selfManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=sftp_permission" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "sftpPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=skip_welcome_screen" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "skipWelcomeScreen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ssl_required" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=sso_strategy_id" }),
        __metadata("design:type", Number)
    ], PatchUserRequestBody.prototype, "ssoStrategyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=subscribe_to_newsletter" }),
        __metadata("design:type", Boolean)
    ], PatchUserRequestBody.prototype, "subscribeToNewsletter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=time_zone" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_root" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "userRoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=username" }),
        __metadata("design:type", String)
    ], PatchUserRequestBody.prototype, "username", void 0);
    return PatchUserRequestBody;
}(SpeakeasyBase));
export { PatchUserRequestBody };
var PatchUserRequest = /** @class */ (function (_super) {
    __extends(PatchUserRequest, _super);
    function PatchUserRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchUserRequestBody)
    ], PatchUserRequest.prototype, "request", void 0);
    return PatchUserRequest;
}(SpeakeasyBase));
export { PatchUserRequest };
var PatchUserResponse = /** @class */ (function (_super) {
    __extends(PatchUserResponse, _super);
    function PatchUserResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchUserResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchUserResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserEntity)
    ], PatchUserResponse.prototype, "userEntity", void 0);
    return PatchUserResponse;
}(SpeakeasyBase));
export { PatchUserResponse };
