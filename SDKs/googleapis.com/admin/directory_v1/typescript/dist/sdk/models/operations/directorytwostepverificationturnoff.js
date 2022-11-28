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
var DirectoryTwoStepVerificationTurnOffPathParams = /** @class */ (function (_super) {
    __extends(DirectoryTwoStepVerificationTurnOffPathParams, _super);
    function DirectoryTwoStepVerificationTurnOffPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userKey" }),
        __metadata("design:type", String)
    ], DirectoryTwoStepVerificationTurnOffPathParams.prototype, "userKey", void 0);
    return DirectoryTwoStepVerificationTurnOffPathParams;
}(SpeakeasyBase));
export { DirectoryTwoStepVerificationTurnOffPathParams };
var DirectoryTwoStepVerificationTurnOffQueryParams = /** @class */ (function (_super) {
    __extends(DirectoryTwoStepVerificationTurnOffQueryParams, _super);
    function DirectoryTwoStepVerificationTurnOffQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], DirectoryTwoStepVerificationTurnOffQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], DirectoryTwoStepVerificationTurnOffQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], DirectoryTwoStepVerificationTurnOffQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], DirectoryTwoStepVerificationTurnOffQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], DirectoryTwoStepVerificationTurnOffQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], DirectoryTwoStepVerificationTurnOffQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], DirectoryTwoStepVerificationTurnOffQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], DirectoryTwoStepVerificationTurnOffQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], DirectoryTwoStepVerificationTurnOffQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], DirectoryTwoStepVerificationTurnOffQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], DirectoryTwoStepVerificationTurnOffQueryParams.prototype, "uploadProtocol", void 0);
    return DirectoryTwoStepVerificationTurnOffQueryParams;
}(SpeakeasyBase));
export { DirectoryTwoStepVerificationTurnOffQueryParams };
var DirectoryTwoStepVerificationTurnOffSecurity = /** @class */ (function (_super) {
    __extends(DirectoryTwoStepVerificationTurnOffSecurity, _super);
    function DirectoryTwoStepVerificationTurnOffSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], DirectoryTwoStepVerificationTurnOffSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], DirectoryTwoStepVerificationTurnOffSecurity.prototype, "oauth2c", void 0);
    return DirectoryTwoStepVerificationTurnOffSecurity;
}(SpeakeasyBase));
export { DirectoryTwoStepVerificationTurnOffSecurity };
var DirectoryTwoStepVerificationTurnOffRequest = /** @class */ (function (_super) {
    __extends(DirectoryTwoStepVerificationTurnOffRequest, _super);
    function DirectoryTwoStepVerificationTurnOffRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryTwoStepVerificationTurnOffPathParams)
    ], DirectoryTwoStepVerificationTurnOffRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryTwoStepVerificationTurnOffQueryParams)
    ], DirectoryTwoStepVerificationTurnOffRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", DirectoryTwoStepVerificationTurnOffSecurity)
    ], DirectoryTwoStepVerificationTurnOffRequest.prototype, "security", void 0);
    return DirectoryTwoStepVerificationTurnOffRequest;
}(SpeakeasyBase));
export { DirectoryTwoStepVerificationTurnOffRequest };
var DirectoryTwoStepVerificationTurnOffResponse = /** @class */ (function (_super) {
    __extends(DirectoryTwoStepVerificationTurnOffResponse, _super);
    function DirectoryTwoStepVerificationTurnOffResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], DirectoryTwoStepVerificationTurnOffResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], DirectoryTwoStepVerificationTurnOffResponse.prototype, "statusCode", void 0);
    return DirectoryTwoStepVerificationTurnOffResponse;
}(SpeakeasyBase));
export { DirectoryTwoStepVerificationTurnOffResponse };
