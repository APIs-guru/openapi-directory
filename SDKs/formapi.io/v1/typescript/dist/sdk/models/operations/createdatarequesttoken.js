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
var CreateDataRequestTokenPathParams = /** @class */ (function (_super) {
    __extends(CreateDataRequestTokenPathParams, _super);
    function CreateDataRequestTokenPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=data_request_id" }),
        __metadata("design:type", String)
    ], CreateDataRequestTokenPathParams.prototype, "dataRequestId", void 0);
    return CreateDataRequestTokenPathParams;
}(SpeakeasyBase));
export { CreateDataRequestTokenPathParams };
var CreateDataRequestTokenSecurity = /** @class */ (function (_super) {
    __extends(CreateDataRequestTokenSecurity, _super);
    function CreateDataRequestTokenSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" }),
        __metadata("design:type", shared.SchemeApiTokenBasic)
    ], CreateDataRequestTokenSecurity.prototype, "apiTokenBasic", void 0);
    return CreateDataRequestTokenSecurity;
}(SpeakeasyBase));
export { CreateDataRequestTokenSecurity };
export var CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum;
(function (CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum) {
    CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum["Success"] = "success";
    CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum["Error"] = "error";
})(CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum || (CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseStatusEnum = {}));
var CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken = /** @class */ (function (_super) {
    __extends(CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken, _super);
    function CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=data_request_url" }),
        __metadata("design:type", String)
    ], CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken.prototype, "dataRequestUrl", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=expires_at" }),
        __metadata("design:type", String)
    ], CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken.prototype, "expiresAt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=id" }),
        __metadata("design:type", String)
    ], CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken.prototype, "id", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=secret" }),
        __metadata("design:type", String)
    ], CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken.prototype, "secret", void 0);
    return CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken;
}(SpeakeasyBase));
export { CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken };
var CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse = /** @class */ (function (_super) {
    __extends(CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse, _super);
    function CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "json, name=errors" }),
        __metadata("design:type", Array)
    ], CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse.prototype, "errors", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=status" }),
        __metadata("design:type", String)
    ], CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse.prototype, "status", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "json, name=token" }),
        __metadata("design:type", CreateDataRequestTokenCreateSubmissionDataRequestTokenResponseToken)
    ], CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse.prototype, "token", void 0);
    return CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse;
}(SpeakeasyBase));
export { CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse };
var CreateDataRequestTokenRequest = /** @class */ (function (_super) {
    __extends(CreateDataRequestTokenRequest, _super);
    function CreateDataRequestTokenRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDataRequestTokenPathParams)
    ], CreateDataRequestTokenRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDataRequestTokenSecurity)
    ], CreateDataRequestTokenRequest.prototype, "security", void 0);
    return CreateDataRequestTokenRequest;
}(SpeakeasyBase));
export { CreateDataRequestTokenRequest };
var CreateDataRequestTokenResponse = /** @class */ (function (_super) {
    __extends(CreateDataRequestTokenResponse, _super);
    function CreateDataRequestTokenResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], CreateDataRequestTokenResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], CreateDataRequestTokenResponse.prototype, "statusCode", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AuthenticationError)
    ], CreateDataRequestTokenResponse.prototype, "authenticationError", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", CreateDataRequestTokenCreateSubmissionDataRequestTokenResponse)
    ], CreateDataRequestTokenResponse.prototype, "createSubmissionDataRequestTokenResponse", void 0);
    return CreateDataRequestTokenResponse;
}(SpeakeasyBase));
export { CreateDataRequestTokenResponse };
