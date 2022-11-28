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
var PostGroupsGroupIdUsersPathParams = /** @class */ (function (_super) {
    __extends(PostGroupsGroupIdUsersPathParams, _super);
    function PostGroupsGroupIdUsersPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" }),
        __metadata("design:type", Number)
    ], PostGroupsGroupIdUsersPathParams.prototype, "groupId", void 0);
    return PostGroupsGroupIdUsersPathParams;
}(SpeakeasyBase));
export { PostGroupsGroupIdUsersPathParams };
export var PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum;
(function (PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum) {
    PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum["Password"] = "password";
    PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum["UnusedFormerLdap"] = "unused_former_ldap";
    PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum["Sso"] = "sso";
    PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum["None"] = "none";
    PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum["EmailSignup"] = "email_signup";
})(PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum || (PostGroupsGroupIdUsersRequestBodyAuthenticationMethodEnum = {}));
var PostGroupsGroupIdUsersRequestBodyAvatarFile = /** @class */ (function (_super) {
    __extends(PostGroupsGroupIdUsersRequestBodyAvatarFile, _super);
    function PostGroupsGroupIdUsersRequestBodyAvatarFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=avatar_file" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBodyAvatarFile.prototype, "avatarFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, content=true" }),
        __metadata("design:type", Uint8Array)
    ], PostGroupsGroupIdUsersRequestBodyAvatarFile.prototype, "content", void 0);
    return PostGroupsGroupIdUsersRequestBodyAvatarFile;
}(SpeakeasyBase));
export { PostGroupsGroupIdUsersRequestBodyAvatarFile };
export var PostGroupsGroupIdUsersRequestBodyRequire2faEnum;
(function (PostGroupsGroupIdUsersRequestBodyRequire2faEnum) {
    PostGroupsGroupIdUsersRequestBodyRequire2faEnum["UseSystemSetting"] = "use_system_setting";
    PostGroupsGroupIdUsersRequestBodyRequire2faEnum["AlwaysRequire"] = "always_require";
    PostGroupsGroupIdUsersRequestBodyRequire2faEnum["NeverRequire"] = "never_require";
})(PostGroupsGroupIdUsersRequestBodyRequire2faEnum || (PostGroupsGroupIdUsersRequestBodyRequire2faEnum = {}));
export var PostGroupsGroupIdUsersRequestBodySslRequiredEnum;
(function (PostGroupsGroupIdUsersRequestBodySslRequiredEnum) {
    PostGroupsGroupIdUsersRequestBodySslRequiredEnum["UseSystemSetting"] = "use_system_setting";
    PostGroupsGroupIdUsersRequestBodySslRequiredEnum["AlwaysRequire"] = "always_require";
    PostGroupsGroupIdUsersRequestBodySslRequiredEnum["NeverRequire"] = "never_require";
})(PostGroupsGroupIdUsersRequestBodySslRequiredEnum || (PostGroupsGroupIdUsersRequestBodySslRequiredEnum = {}));
var PostGroupsGroupIdUsersRequestBody = /** @class */ (function (_super) {
    __extends(PostGroupsGroupIdUsersRequestBody, _super);
    function PostGroupsGroupIdUsersRequestBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=allowed_ips" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "allowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=announcements_read" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "announcementsRead", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=attachments_permission" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "attachmentsPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=authenticate_until" }),
        __metadata("design:type", Date)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "authenticateUntil", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=authentication_method" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "authenticationMethod", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=avatar_delete" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "avatarDelete", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, file=true" }),
        __metadata("design:type", PostGroupsGroupIdUsersRequestBodyAvatarFile)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "avatarFile", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=billing_permission" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "billingPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=bypass_inactive_disable" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "bypassInactiveDisable", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=bypass_site_allowed_ips" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "bypassSiteAllowedIps", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=change_password" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "changePassword", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=change_password_confirmation" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "changePasswordConfirmation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=company" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "company", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=dav_permission" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "davPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=disabled" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "disabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=email" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ftp_permission" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "ftpPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=grant_permission" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "grantPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=group_ids" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "groupIds", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=header_text" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "headerText", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=language" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "language", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=name" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=notes" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "notes", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=notification_daily_send_time" }),
        __metadata("design:type", Number)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "notificationDailySendTime", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=office_integration_enabled" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "officeIntegrationEnabled", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "password", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_confirmation" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "passwordConfirmation", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=password_validity_days" }),
        __metadata("design:type", Number)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "passwordValidityDays", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=receive_admin_alerts" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "receiveAdminAlerts", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=require_2fa" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "require2fa", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=require_password_change" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "requirePasswordChange", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=restapi_permission" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "restapiPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=self_managed" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "selfManaged", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=sftp_permission" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "sftpPermission", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=site_admin" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "siteAdmin", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=skip_welcome_screen" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "skipWelcomeScreen", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=ssl_required" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "sslRequired", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=sso_strategy_id" }),
        __metadata("design:type", Number)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "ssoStrategyId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=subscribe_to_newsletter" }),
        __metadata("design:type", Boolean)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "subscribeToNewsletter", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=time_zone" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "timeZone", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=user_root" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "userRoot", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "multipart_form, name=username" }),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersRequestBody.prototype, "username", void 0);
    return PostGroupsGroupIdUsersRequestBody;
}(SpeakeasyBase));
export { PostGroupsGroupIdUsersRequestBody };
var PostGroupsGroupIdUsersRequest = /** @class */ (function (_super) {
    __extends(PostGroupsGroupIdUsersRequest, _super);
    function PostGroupsGroupIdUsersRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", PostGroupsGroupIdUsersPathParams)
    ], PostGroupsGroupIdUsersRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" }),
        __metadata("design:type", PostGroupsGroupIdUsersRequestBody)
    ], PostGroupsGroupIdUsersRequest.prototype, "request", void 0);
    return PostGroupsGroupIdUsersRequest;
}(SpeakeasyBase));
export { PostGroupsGroupIdUsersRequest };
var PostGroupsGroupIdUsersResponse = /** @class */ (function (_super) {
    __extends(PostGroupsGroupIdUsersResponse, _super);
    function PostGroupsGroupIdUsersResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], PostGroupsGroupIdUsersResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], PostGroupsGroupIdUsersResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.UserEntity)
    ], PostGroupsGroupIdUsersResponse.prototype, "userEntity", void 0);
    return PostGroupsGroupIdUsersResponse;
}(SpeakeasyBase));
export { PostGroupsGroupIdUsersResponse };
