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
var UpdateDataRequestPathParams = /** @class */ (function (_super) {
    __extends(UpdateDataRequestPathParams, _super);
    function UpdateDataRequestPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=data_request_id" }),
        __metadata("design:type", String)
    ], UpdateDataRequestPathParams.prototype, "dataRequestId", void 0);
    return UpdateDataRequestPathParams;
}(SpeakeasyBase));
export { UpdateDataRequestPathParams };
export var UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum;
(function (UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum) {
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum["None"] = "none";
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum["PhoneNumber"] = "phone_number";
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum["Totp"] = "totp";
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum["MobilePush"] = "mobile_push";
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum["SecurityKey"] = "security_key";
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum["Fingerprint"] = "fingerprint";
})(UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum || (UpdateDataRequestUpdateSubmissionDataRequestDataAuthSecondFactorTypeEnum = {}));
export var UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum;
(function (UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum) {
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum["None"] = "none";
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum["Password"] = "password";
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum["Oauth"] = "oauth";
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum["EmailLink"] = "email_link";
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum["PhoneNumber"] = "phone_number";
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum["Ldap"] = "ldap";
    UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum["Saml"] = "saml";
})(UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum || (UpdateDataRequestUpdateSubmissionDataRequestDataAuthTypeEnum = {}));
var UpdateDataRequestUpdateSubmissionDataRequestData = /** @class */ (function (_super) {
    __extends(UpdateDataRequestUpdateSubmissionDataRequestData, _super);
    function UpdateDataRequestUpdateSubmissionDataRequestData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_phone_number_hash" }),
        __metadata("design:type", String)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "authPhoneNumberHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_provider" }),
        __metadata("design:type", String)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "authProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_second_factor_type" }),
        __metadata("design:type", String)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "authSecondFactorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_session_id_hash" }),
        __metadata("design:type", String)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "authSessionIdHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_session_started_at" }),
        __metadata("design:type", String)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "authSessionStartedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_type" }),
        __metadata("design:type", String)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "authType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_user_id_hash" }),
        __metadata("design:type", String)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "authUserIdHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_username_hash" }),
        __metadata("design:type", String)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "authUsernameHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", Array)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", Number)
    ], UpdateDataRequestUpdateSubmissionDataRequestData.prototype, "order", void 0);
    return UpdateDataRequestUpdateSubmissionDataRequestData;
}(SpeakeasyBase));
export { UpdateDataRequestUpdateSubmissionDataRequestData };
var UpdateDataRequestSecurity = /** @class */ (function (_super) {
    __extends(UpdateDataRequestSecurity, _super);
    function UpdateDataRequestSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], UpdateDataRequestSecurity.prototype, "apiTokenBasic", void 0);
    return UpdateDataRequestSecurity;
}(SpeakeasyBase));
export { UpdateDataRequestSecurity };
export var UpdateDataRequestUpdateDataRequestResponseStatusEnum;
(function (UpdateDataRequestUpdateDataRequestResponseStatusEnum) {
    UpdateDataRequestUpdateDataRequestResponseStatusEnum["Success"] = "success";
    UpdateDataRequestUpdateDataRequestResponseStatusEnum["Error"] = "error";
})(UpdateDataRequestUpdateDataRequestResponseStatusEnum || (UpdateDataRequestUpdateDataRequestResponseStatusEnum = {}));
var UpdateDataRequestUpdateDataRequestResponse = /** @class */ (function (_super) {
    __extends(UpdateDataRequestUpdateDataRequestResponse, _super);
    function UpdateDataRequestUpdateDataRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_request" }),
        __metadata("design:type", shared.SubmissionDataRequest)
    ], UpdateDataRequestUpdateDataRequestResponse.prototype, "dataRequest", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], UpdateDataRequestUpdateDataRequestResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], UpdateDataRequestUpdateDataRequestResponse.prototype, "status", void 0);
    return UpdateDataRequestUpdateDataRequestResponse;
}(SpeakeasyBase));
export { UpdateDataRequestUpdateDataRequestResponse };
var UpdateDataRequestRequest = /** @class */ (function (_super) {
    __extends(UpdateDataRequestRequest, _super);
    function UpdateDataRequestRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDataRequestPathParams)
    ], UpdateDataRequestRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", UpdateDataRequestUpdateSubmissionDataRequestData)
    ], UpdateDataRequestRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDataRequestSecurity)
    ], UpdateDataRequestRequest.prototype, "security", void 0);
    return UpdateDataRequestRequest;
}(SpeakeasyBase));
export { UpdateDataRequestRequest };
var UpdateDataRequestResponse = /** @class */ (function (_super) {
    __extends(UpdateDataRequestResponse, _super);
    function UpdateDataRequestResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], UpdateDataRequestResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], UpdateDataRequestResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], UpdateDataRequestResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], UpdateDataRequestResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidRequest)
    ], UpdateDataRequestResponse.prototype, "invalidRequest", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", UpdateDataRequestUpdateDataRequestResponse)
    ], UpdateDataRequestResponse.prototype, "updateDataRequestResponse", void 0);
    return UpdateDataRequestResponse;
}(SpeakeasyBase));
export { UpdateDataRequestResponse };
