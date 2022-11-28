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
var AdsenseAccountsGetAdBlockingRecoveryTagPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetAdBlockingRecoveryTagPathParams, _super);
    function AdsenseAccountsGetAdBlockingRecoveryTagPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetAdBlockingRecoveryTagPathParams.prototype, "name", void 0);
    return AdsenseAccountsGetAdBlockingRecoveryTagPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsGetAdBlockingRecoveryTagPathParams };
var AdsenseAccountsGetAdBlockingRecoveryTagQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetAdBlockingRecoveryTagQueryParams, _super);
    function AdsenseAccountsGetAdBlockingRecoveryTagQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetAdBlockingRecoveryTagQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetAdBlockingRecoveryTagQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetAdBlockingRecoveryTagQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetAdBlockingRecoveryTagQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetAdBlockingRecoveryTagQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetAdBlockingRecoveryTagQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetAdBlockingRecoveryTagQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsGetAdBlockingRecoveryTagQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetAdBlockingRecoveryTagQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetAdBlockingRecoveryTagQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdsenseAccountsGetAdBlockingRecoveryTagQueryParams.prototype, "uploadProtocol", void 0);
    return AdsenseAccountsGetAdBlockingRecoveryTagQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsGetAdBlockingRecoveryTagQueryParams };
var AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1, _super);
    function AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1 };
var AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2, _super);
    function AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2 };
var AdsenseAccountsGetAdBlockingRecoveryTagSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetAdBlockingRecoveryTagSecurity, _super);
    function AdsenseAccountsGetAdBlockingRecoveryTagSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption1)
    ], AdsenseAccountsGetAdBlockingRecoveryTagSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsGetAdBlockingRecoveryTagSecurityOption2)
    ], AdsenseAccountsGetAdBlockingRecoveryTagSecurity.prototype, "option2", void 0);
    return AdsenseAccountsGetAdBlockingRecoveryTagSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsGetAdBlockingRecoveryTagSecurity };
var AdsenseAccountsGetAdBlockingRecoveryTagRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetAdBlockingRecoveryTagRequest, _super);
    function AdsenseAccountsGetAdBlockingRecoveryTagRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsGetAdBlockingRecoveryTagPathParams)
    ], AdsenseAccountsGetAdBlockingRecoveryTagRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsGetAdBlockingRecoveryTagQueryParams)
    ], AdsenseAccountsGetAdBlockingRecoveryTagRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsGetAdBlockingRecoveryTagSecurity)
    ], AdsenseAccountsGetAdBlockingRecoveryTagRequest.prototype, "security", void 0);
    return AdsenseAccountsGetAdBlockingRecoveryTagRequest;
}(SpeakeasyBase));
export { AdsenseAccountsGetAdBlockingRecoveryTagRequest };
var AdsenseAccountsGetAdBlockingRecoveryTagResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsGetAdBlockingRecoveryTagResponse, _super);
    function AdsenseAccountsGetAdBlockingRecoveryTagResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdBlockingRecoveryTag)
    ], AdsenseAccountsGetAdBlockingRecoveryTagResponse.prototype, "adBlockingRecoveryTag", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsGetAdBlockingRecoveryTagResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsGetAdBlockingRecoveryTagResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsGetAdBlockingRecoveryTagResponse;
}(SpeakeasyBase));
export { AdsenseAccountsGetAdBlockingRecoveryTagResponse };
