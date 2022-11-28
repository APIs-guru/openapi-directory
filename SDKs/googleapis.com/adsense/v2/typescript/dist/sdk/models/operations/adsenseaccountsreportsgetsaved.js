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
var AdsenseAccountsReportsGetSavedPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGetSavedPathParams, _super);
    function AdsenseAccountsReportsGetSavedPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=name" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGetSavedPathParams.prototype, "name", void 0);
    return AdsenseAccountsReportsGetSavedPathParams;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGetSavedPathParams };
var AdsenseAccountsReportsGetSavedQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGetSavedQueryParams, _super);
    function AdsenseAccountsReportsGetSavedQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGetSavedQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGetSavedQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGetSavedQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGetSavedQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGetSavedQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGetSavedQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGetSavedQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAccountsReportsGetSavedQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGetSavedQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGetSavedQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGetSavedQueryParams.prototype, "uploadProtocol", void 0);
    return AdsenseAccountsReportsGetSavedQueryParams;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGetSavedQueryParams };
var AdsenseAccountsReportsGetSavedSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGetSavedSecurityOption1, _super);
    function AdsenseAccountsReportsGetSavedSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsReportsGetSavedSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsReportsGetSavedSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAccountsReportsGetSavedSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGetSavedSecurityOption1 };
var AdsenseAccountsReportsGetSavedSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGetSavedSecurityOption2, _super);
    function AdsenseAccountsReportsGetSavedSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAccountsReportsGetSavedSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAccountsReportsGetSavedSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAccountsReportsGetSavedSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGetSavedSecurityOption2 };
var AdsenseAccountsReportsGetSavedSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGetSavedSecurity, _super);
    function AdsenseAccountsReportsGetSavedSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsReportsGetSavedSecurityOption1)
    ], AdsenseAccountsReportsGetSavedSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAccountsReportsGetSavedSecurityOption2)
    ], AdsenseAccountsReportsGetSavedSecurity.prototype, "option2", void 0);
    return AdsenseAccountsReportsGetSavedSecurity;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGetSavedSecurity };
var AdsenseAccountsReportsGetSavedRequest = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGetSavedRequest, _super);
    function AdsenseAccountsReportsGetSavedRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsGetSavedPathParams)
    ], AdsenseAccountsReportsGetSavedRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsGetSavedQueryParams)
    ], AdsenseAccountsReportsGetSavedRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAccountsReportsGetSavedSecurity)
    ], AdsenseAccountsReportsGetSavedRequest.prototype, "security", void 0);
    return AdsenseAccountsReportsGetSavedRequest;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGetSavedRequest };
var AdsenseAccountsReportsGetSavedResponse = /** @class */ (function (_super) {
    __extends(AdsenseAccountsReportsGetSavedResponse, _super);
    function AdsenseAccountsReportsGetSavedResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAccountsReportsGetSavedResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SavedReport)
    ], AdsenseAccountsReportsGetSavedResponse.prototype, "savedReport", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAccountsReportsGetSavedResponse.prototype, "statusCode", void 0);
    return AdsenseAccountsReportsGetSavedResponse;
}(SpeakeasyBase));
export { AdsenseAccountsReportsGetSavedResponse };
