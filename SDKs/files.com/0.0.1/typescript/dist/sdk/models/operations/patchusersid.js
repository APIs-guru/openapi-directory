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
var PatchUsersIdPathParams = /** @class */ (function (_super) {
    __extends(PatchUsersIdPathParams, _super);
    function PatchUsersIdPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" }),
        __metadata("design:type", Number)
    ], PatchUsersIdPathParams.prototype, "id", void 0);
    return PatchUsersIdPathParams;
}(SpeakeasyBase));
export { PatchUsersIdPathParams };
export var PatchUsersIdRequestBodyAuthenticationMethodEnum;
(function (PatchUsersIdRequestBodyAuthenticationMethodEnum) {
    PatchUsersIdRequestBodyAuthenticationMethodEnum["Password"] = "password";
    PatchUsersIdRequestBodyAuthenticationMethodEnum["UnusedFormerLdap"] = "unused_former_ldap";
    PatchUsersIdRequestBodyAuthenticationMethodEnum["Sso"] = "sso";
    PatchUsersIdRequestBodyAuthenticationMethodEnum["None"] = "none";
    PatchUsersIdRequestBodyAuthenticationMethodEnum["EmailSignup"] = "email_signup";
})(PatchUsersIdRequestBodyAuthenticationMethodEnum || (PatchUsersIdRequestBodyAuthenticationMethodEnum = {}));
var PatchUsersIdRequestBodyAvatarFile = /** @class */ (function (_super) {
    __extends(PatchUsersIdRequestBodyAvatarFile, _super);
    function PatchUsersIdRequestBodyAvatarFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=avatar_file" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBodyAvatarFile.prototype, "avatarFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PatchUsersIdRequestBodyAvatarFile.prototype, "content", void 0);
    return PatchUsersIdRequestBodyAvatarFile;
}(SpeakeasyBase));
export { PatchUsersIdRequestBodyAvatarFile };
export var PatchUsersIdRequestBodyRequire2faEnum;
(function (PatchUsersIdRequestBodyRequire2faEnum) {
    PatchUsersIdRequestBodyRequire2faEnum["UseSystemSetting"] = "use_system_setting";
    PatchUsersIdRequestBodyRequire2faEnum["AlwaysRequire"] = "always_require";
    PatchUsersIdRequestBodyRequire2faEnum["NeverRequire"] = "never_require";
})(PatchUsersIdRequestBodyRequire2faEnum || (PatchUsersIdRequestBodyRequire2faEnum = {}));
export var PatchUsersIdRequestBodySslRequiredEnum;
(function (PatchUsersIdRequestBodySslRequiredEnum) {
    PatchUsersIdRequestBodySslRequiredEnum["UseSystemSetting"] = "use_system_setting";
    PatchUsersIdRequestBodySslRequiredEnum["AlwaysRequire"] = "always_require";
    PatchUsersIdRequestBodySslRequiredEnum["NeverRequire"] = "never_require";
})(PatchUsersIdRequestBodySslRequiredEnum || (PatchUsersIdRequestBodySslRequiredEnum = {}));
var PatchUsersIdRequestBody = /** @class */ (function (_super) {
    __extends(PatchUsersIdRequestBody, _super);
    function PatchUsersIdRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allowed_ips" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "allowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=announcements_read" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "announcementsRead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=attachments_permission" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "attachmentsPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=authenticate_until" }),
        __metadata("design:type", Date)
    ], PatchUsersIdRequestBody.prototype, "authenticateUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=authentication_method" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "authenticationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=avatar_delete" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "avatarDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PatchUsersIdRequestBodyAvatarFile)
    ], PatchUsersIdRequestBody.prototype, "avatarFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=billing_permission" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "billingPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=bypass_inactive_disable" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "bypassInactiveDisable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=bypass_site_allowed_ips" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "bypassSiteAllowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=change_password" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "changePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=change_password_confirmation" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "changePasswordConfirmation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=company" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=dav_permission" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "davPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=disabled" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=email" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ftp_permission" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "ftpPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=grant_permission" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "grantPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=group_id" }),
        __metadata("design:type", Number)
    ], PatchUsersIdRequestBody.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=group_ids" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=header_text" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "headerText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=language" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=notes" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=notification_daily_send_time" }),
        __metadata("design:type", Number)
    ], PatchUsersIdRequestBody.prototype, "notificationDailySendTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=office_integration_enabled" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "officeIntegrationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_confirmation" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "passwordConfirmation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_validity_days" }),
        __metadata("design:type", Number)
    ], PatchUsersIdRequestBody.prototype, "passwordValidityDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=receive_admin_alerts" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "receiveAdminAlerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=require_2fa" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "require2fa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=require_password_change" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "requirePasswordChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=restapi_permission" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "restapiPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=self_managed" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "selfManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=sftp_permission" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "sftpPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=skip_welcome_screen" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "skipWelcomeScreen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ssl_required" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=sso_strategy_id" }),
        __metadata("design:type", Number)
    ], PatchUsersIdRequestBody.prototype, "ssoStrategyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=subscribe_to_newsletter" }),
        __metadata("design:type", Boolean)
    ], PatchUsersIdRequestBody.prototype, "subscribeToNewsletter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=time_zone" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_root" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "userRoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=username" }),
        __metadata("design:type", String)
    ], PatchUsersIdRequestBody.prototype, "username", void 0);
    return PatchUsersIdRequestBody;
}(SpeakeasyBase));
export { PatchUsersIdRequestBody };
var PatchUsersIdRequest = /** @class */ (function (_super) {
    __extends(PatchUsersIdRequest, _super);
    function PatchUsersIdRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PatchUsersIdPathParams)
    ], PatchUsersIdRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PatchUsersIdRequestBody)
    ], PatchUsersIdRequest.prototype, "request", void 0);
    return PatchUsersIdRequest;
}(SpeakeasyBase));
export { PatchUsersIdRequest };
var PatchUsersIdResponse = /** @class */ (function (_super) {
    __extends(PatchUsersIdResponse, _super);
    function PatchUsersIdResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PatchUsersIdResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PatchUsersIdResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserEntity)
    ], PatchUsersIdResponse.prototype, "userEntity", void 0);
    return PatchUsersIdResponse;
}(SpeakeasyBase));
export { PatchUsersIdResponse };
