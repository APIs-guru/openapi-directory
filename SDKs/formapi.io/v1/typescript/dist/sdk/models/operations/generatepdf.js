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
var GeneratePdfPathParams = /** @class */ (function (_super) {
    __extends(GeneratePdfPathParams, _super);
    function GeneratePdfPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=template_id" }),
        __metadata("design:type", String)
    ], GeneratePdfPathParams.prototype, "templateId", void 0);
    return GeneratePdfPathParams;
}(SpeakeasyBase));
export { GeneratePdfPathParams };
export var GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum;
(function (GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum) {
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum["None"] = "none";
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum["PhoneNumber"] = "phone_number";
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum["Totp"] = "totp";
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum["MobilePush"] = "mobile_push";
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum["SecurityKey"] = "security_key";
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum["Fingerprint"] = "fingerprint";
})(GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum || (GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthSecondFactorTypeEnum = {}));
export var GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum;
(function (GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum) {
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum["None"] = "none";
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum["Password"] = "password";
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum["Oauth"] = "oauth";
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum["EmailLink"] = "email_link";
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum["PhoneNumber"] = "phone_number";
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum["Ldap"] = "ldap";
    GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum["Saml"] = "saml";
})(GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum || (GeneratePdfSubmissionDataCreateSubmissionDataRequestDataAuthTypeEnum = {}));
var GeneratePdfSubmissionDataCreateSubmissionDataRequestData = /** @class */ (function (_super) {
    __extends(GeneratePdfSubmissionDataCreateSubmissionDataRequestData, _super);
    function GeneratePdfSubmissionDataCreateSubmissionDataRequestData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_phone_number_hash" }),
        __metadata("design:type", String)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "authPhoneNumberHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_provider" }),
        __metadata("design:type", String)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "authProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_second_factor_type" }),
        __metadata("design:type", String)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "authSecondFactorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_session_id_hash" }),
        __metadata("design:type", String)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "authSessionIdHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_session_started_at" }),
        __metadata("design:type", String)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "authSessionStartedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_type" }),
        __metadata("design:type", String)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "authType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_user_id_hash" }),
        __metadata("design:type", String)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "authUserIdHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_username_hash" }),
        __metadata("design:type", String)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "authUsernameHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", Array)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", Number)
    ], GeneratePdfSubmissionDataCreateSubmissionDataRequestData.prototype, "order", void 0);
    return GeneratePdfSubmissionDataCreateSubmissionDataRequestData;
}(SpeakeasyBase));
export { GeneratePdfSubmissionDataCreateSubmissionDataRequestData };
var GeneratePdfSubmissionData = /** @class */ (function (_super) {
    __extends(GeneratePdfSubmissionData, _super);
    function GeneratePdfSubmissionData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=css" }),
        __metadata("design:type", String)
    ], GeneratePdfSubmissionData.prototype, "css", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data" }),
        __metadata("design:type", Map)
    ], GeneratePdfSubmissionData.prototype, "data", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_requests", elemType: GeneratePdfSubmissionDataCreateSubmissionDataRequestData }),
        __metadata("design:type", Array)
    ], GeneratePdfSubmissionData.prototype, "dataRequests", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=field_overrides" }),
        __metadata("design:type", Map)
    ], GeneratePdfSubmissionData.prototype, "fieldOverrides", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=html" }),
        __metadata("design:type", String)
    ], GeneratePdfSubmissionData.prototype, "html", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], GeneratePdfSubmissionData.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=test" }),
        __metadata("design:type", Boolean)
    ], GeneratePdfSubmissionData.prototype, "test", void 0);
    return GeneratePdfSubmissionData;
}(SpeakeasyBase));
export { GeneratePdfSubmissionData };
var GeneratePdfSecurity = /** @class */ (function (_super) {
    __extends(GeneratePdfSecurity, _super);
    function GeneratePdfSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], GeneratePdfSecurity.prototype, "apiTokenBasic", void 0);
    return GeneratePdfSecurity;
}(SpeakeasyBase));
export { GeneratePdfSecurity };
export var GeneratePdfCreateSubmissionResponseStatusEnum;
(function (GeneratePdfCreateSubmissionResponseStatusEnum) {
    GeneratePdfCreateSubmissionResponseStatusEnum["Success"] = "success";
    GeneratePdfCreateSubmissionResponseStatusEnum["Error"] = "error";
})(GeneratePdfCreateSubmissionResponseStatusEnum || (GeneratePdfCreateSubmissionResponseStatusEnum = {}));
var GeneratePdfCreateSubmissionResponse = /** @class */ (function (_super) {
    __extends(GeneratePdfCreateSubmissionResponse, _super);
    function GeneratePdfCreateSubmissionResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], GeneratePdfCreateSubmissionResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], GeneratePdfCreateSubmissionResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=submission" }),
        __metadata("design:type", shared.Submission)
    ], GeneratePdfCreateSubmissionResponse.prototype, "submission", void 0);
    return GeneratePdfCreateSubmissionResponse;
}(SpeakeasyBase));
export { GeneratePdfCreateSubmissionResponse };
var GeneratePdfRequest = /** @class */ (function (_super) {
    __extends(GeneratePdfRequest, _super);
    function GeneratePdfRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GeneratePdfPathParams)
    ], GeneratePdfRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", GeneratePdfSubmissionData)
    ], GeneratePdfRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GeneratePdfSecurity)
    ], GeneratePdfRequest.prototype, "security", void 0);
    return GeneratePdfRequest;
}(SpeakeasyBase));
export { GeneratePdfRequest };
var GeneratePdfResponse = /** @class */ (function (_super) {
    __extends(GeneratePdfResponse, _super);
    function GeneratePdfResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], GeneratePdfResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], GeneratePdfResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], GeneratePdfResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", GeneratePdfCreateSubmissionResponse)
    ], GeneratePdfResponse.prototype, "createSubmissionResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Error)
    ], GeneratePdfResponse.prototype, "error", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.InvalidRequest)
    ], GeneratePdfResponse.prototype, "invalidRequest", void 0);
    return GeneratePdfResponse;
}(SpeakeasyBase));
export { GeneratePdfResponse };
