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
export var PostUsersRequestBodyAuthenticationMethodEnum;
(function (PostUsersRequestBodyAuthenticationMethodEnum) {
    PostUsersRequestBodyAuthenticationMethodEnum["Password"] = "password";
    PostUsersRequestBodyAuthenticationMethodEnum["UnusedFormerLdap"] = "unused_former_ldap";
    PostUsersRequestBodyAuthenticationMethodEnum["Sso"] = "sso";
    PostUsersRequestBodyAuthenticationMethodEnum["None"] = "none";
    PostUsersRequestBodyAuthenticationMethodEnum["EmailSignup"] = "email_signup";
})(PostUsersRequestBodyAuthenticationMethodEnum || (PostUsersRequestBodyAuthenticationMethodEnum = {}));
var PostUsersRequestBodyAvatarFile = /** @class */ (function (_super) {
    __extends(PostUsersRequestBodyAvatarFile, _super);
    function PostUsersRequestBodyAvatarFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=avatar_file" }),
        __metadata("design:type", String)
    ], PostUsersRequestBodyAvatarFile.prototype, "avatarFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostUsersRequestBodyAvatarFile.prototype, "content", void 0);
    return PostUsersRequestBodyAvatarFile;
}(SpeakeasyBase));
export { PostUsersRequestBodyAvatarFile };
export var PostUsersRequestBodyRequire2faEnum;
(function (PostUsersRequestBodyRequire2faEnum) {
    PostUsersRequestBodyRequire2faEnum["UseSystemSetting"] = "use_system_setting";
    PostUsersRequestBodyRequire2faEnum["AlwaysRequire"] = "always_require";
    PostUsersRequestBodyRequire2faEnum["NeverRequire"] = "never_require";
})(PostUsersRequestBodyRequire2faEnum || (PostUsersRequestBodyRequire2faEnum = {}));
export var PostUsersRequestBodySslRequiredEnum;
(function (PostUsersRequestBodySslRequiredEnum) {
    PostUsersRequestBodySslRequiredEnum["UseSystemSetting"] = "use_system_setting";
    PostUsersRequestBodySslRequiredEnum["AlwaysRequire"] = "always_require";
    PostUsersRequestBodySslRequiredEnum["NeverRequire"] = "never_require";
})(PostUsersRequestBodySslRequiredEnum || (PostUsersRequestBodySslRequiredEnum = {}));
var PostUsersRequestBody = /** @class */ (function (_super) {
    __extends(PostUsersRequestBody, _super);
    function PostUsersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allowed_ips" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "allowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=announcements_read" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "announcementsRead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=attachments_permission" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "attachmentsPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=authenticate_until" }),
        __metadata("design:type", Date)
    ], PostUsersRequestBody.prototype, "authenticateUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=authentication_method" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "authenticationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=avatar_delete" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "avatarDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostUsersRequestBodyAvatarFile)
    ], PostUsersRequestBody.prototype, "avatarFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=billing_permission" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "billingPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=bypass_inactive_disable" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "bypassInactiveDisable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=bypass_site_allowed_ips" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "bypassSiteAllowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=change_password" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "changePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=change_password_confirmation" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "changePasswordConfirmation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=company" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=dav_permission" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "davPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=disabled" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=email" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ftp_permission" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "ftpPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=grant_permission" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "grantPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=group_id" }),
        __metadata("design:type", Number)
    ], PostUsersRequestBody.prototype, "groupId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=group_ids" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=header_text" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "headerText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=language" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=notes" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=notification_daily_send_time" }),
        __metadata("design:type", Number)
    ], PostUsersRequestBody.prototype, "notificationDailySendTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=office_integration_enabled" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "officeIntegrationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_confirmation" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "passwordConfirmation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_validity_days" }),
        __metadata("design:type", Number)
    ], PostUsersRequestBody.prototype, "passwordValidityDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=receive_admin_alerts" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "receiveAdminAlerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=require_2fa" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "require2fa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=require_password_change" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "requirePasswordChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=restapi_permission" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "restapiPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=self_managed" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "selfManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=sftp_permission" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "sftpPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=skip_welcome_screen" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "skipWelcomeScreen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ssl_required" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=sso_strategy_id" }),
        __metadata("design:type", Number)
    ], PostUsersRequestBody.prototype, "ssoStrategyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=subscribe_to_newsletter" }),
        __metadata("design:type", Boolean)
    ], PostUsersRequestBody.prototype, "subscribeToNewsletter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=time_zone" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_root" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "userRoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=username" }),
        __metadata("design:type", String)
    ], PostUsersRequestBody.prototype, "username", void 0);
    return PostUsersRequestBody;
}(SpeakeasyBase));
export { PostUsersRequestBody };
var PostUsersRequest = /** @class */ (function (_super) {
    __extends(PostUsersRequest, _super);
    function PostUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostUsersRequestBody)
    ], PostUsersRequest.prototype, "request", void 0);
    return PostUsersRequest;
}(SpeakeasyBase));
export { PostUsersRequest };
var PostUsersResponse = /** @class */ (function (_super) {
    __extends(PostUsersResponse, _super);
    function PostUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserEntity)
    ], PostUsersResponse.prototype, "userEntity", void 0);
    return PostUsersResponse;
}(SpeakeasyBase));
export { PostUsersResponse };
