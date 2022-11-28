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
export var SubmissionDataRequestAuthSecondFactorTypeEnum;
(function (SubmissionDataRequestAuthSecondFactorTypeEnum) {
    SubmissionDataRequestAuthSecondFactorTypeEnum["None"] = "none";
    SubmissionDataRequestAuthSecondFactorTypeEnum["PhoneNumber"] = "phone_number";
    SubmissionDataRequestAuthSecondFactorTypeEnum["Totp"] = "totp";
    SubmissionDataRequestAuthSecondFactorTypeEnum["MobilePush"] = "mobile_push";
    SubmissionDataRequestAuthSecondFactorTypeEnum["SecurityKey"] = "security_key";
    SubmissionDataRequestAuthSecondFactorTypeEnum["Fingerprint"] = "fingerprint";
})(SubmissionDataRequestAuthSecondFactorTypeEnum || (SubmissionDataRequestAuthSecondFactorTypeEnum = {}));
export var SubmissionDataRequestAuthTypeEnum;
(function (SubmissionDataRequestAuthTypeEnum) {
    SubmissionDataRequestAuthTypeEnum["None"] = "none";
    SubmissionDataRequestAuthTypeEnum["Password"] = "password";
    SubmissionDataRequestAuthTypeEnum["Oauth"] = "oauth";
    SubmissionDataRequestAuthTypeEnum["EmailLink"] = "email_link";
    SubmissionDataRequestAuthTypeEnum["PhoneNumber"] = "phone_number";
    SubmissionDataRequestAuthTypeEnum["Ldap"] = "ldap";
    SubmissionDataRequestAuthTypeEnum["Saml"] = "saml";
})(SubmissionDataRequestAuthTypeEnum || (SubmissionDataRequestAuthTypeEnum = {}));
export var SubmissionDataRequestStateEnum;
(function (SubmissionDataRequestStateEnum) {
    SubmissionDataRequestStateEnum["Pending"] = "pending";
    SubmissionDataRequestStateEnum["Completed"] = "completed";
})(SubmissionDataRequestStateEnum || (SubmissionDataRequestStateEnum = {}));
var SubmissionDataRequest = /** @class */ (function (_super) {
    __extends(SubmissionDataRequest, _super);
    function SubmissionDataRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_phone_number_hash" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "authPhoneNumberHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_provider" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "authProvider", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_second_factor_type" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "authSecondFactorType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_session_id_hash" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "authSessionIdHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_session_started_at" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "authSessionStartedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_type" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "authType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_user_id_hash" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "authUserIdHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=auth_username_hash" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "authUsernameHash", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=completed_at" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "completedAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=email" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "email", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=fields" }),
        __metadata("design:type", Array)
    ], SubmissionDataRequest.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=ip_address" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "ipAddress", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=metadata" }),
        __metadata("design:type", Map)
    ], SubmissionDataRequest.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=name" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "name", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=order" }),
        __metadata("design:type", Number)
    ], SubmissionDataRequest.prototype, "order", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=sort_order" }),
        __metadata("design:type", Number)
    ], SubmissionDataRequest.prototype, "sortOrder", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=state" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "state", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=user_agent" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "userAgent", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=viewed_at" }),
        __metadata("design:type", String)
    ], SubmissionDataRequest.prototype, "viewedAt", void 0);
    return SubmissionDataRequest;
}(SpeakeasyBase));
export { SubmissionDataRequest };
