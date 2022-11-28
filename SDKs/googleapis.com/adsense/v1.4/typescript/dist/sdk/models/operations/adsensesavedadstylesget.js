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
var AdsenseSavedadstylesGetPathParams = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesGetPathParams, _super);
    function AdsenseSavedadstylesGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=savedAdStyleId" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesGetPathParams.prototype, "savedAdStyleId", void 0);
    return AdsenseSavedadstylesGetPathParams;
}(SpeakeasyBase));
export { AdsenseSavedadstylesGetPathParams };
var AdsenseSavedadstylesGetQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesGetQueryParams, _super);
    function AdsenseSavedadstylesGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseSavedadstylesGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesGetQueryParams.prototype, "userIp", void 0);
    return AdsenseSavedadstylesGetQueryParams;
}(SpeakeasyBase));
export { AdsenseSavedadstylesGetQueryParams };
var AdsenseSavedadstylesGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesGetSecurityOption1, _super);
    function AdsenseSavedadstylesGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseSavedadstylesGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseSavedadstylesGetSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseSavedadstylesGetSecurityOption1;
}(SpeakeasyBase));
export { AdsenseSavedadstylesGetSecurityOption1 };
var AdsenseSavedadstylesGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesGetSecurityOption2, _super);
    function AdsenseSavedadstylesGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseSavedadstylesGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseSavedadstylesGetSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseSavedadstylesGetSecurityOption2;
}(SpeakeasyBase));
export { AdsenseSavedadstylesGetSecurityOption2 };
var AdsenseSavedadstylesGetSecurity = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesGetSecurity, _super);
    function AdsenseSavedadstylesGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseSavedadstylesGetSecurityOption1)
    ], AdsenseSavedadstylesGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseSavedadstylesGetSecurityOption2)
    ], AdsenseSavedadstylesGetSecurity.prototype, "option2", void 0);
    return AdsenseSavedadstylesGetSecurity;
}(SpeakeasyBase));
export { AdsenseSavedadstylesGetSecurity };
var AdsenseSavedadstylesGetRequest = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesGetRequest, _super);
    function AdsenseSavedadstylesGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseSavedadstylesGetPathParams)
    ], AdsenseSavedadstylesGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseSavedadstylesGetQueryParams)
    ], AdsenseSavedadstylesGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseSavedadstylesGetSecurity)
    ], AdsenseSavedadstylesGetRequest.prototype, "security", void 0);
    return AdsenseSavedadstylesGetRequest;
}(SpeakeasyBase));
export { AdsenseSavedadstylesGetRequest };
var AdsenseSavedadstylesGetResponse = /** @class */ (function (_super) {
    __extends(AdsenseSavedadstylesGetResponse, _super);
    function AdsenseSavedadstylesGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseSavedadstylesGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SavedAdStyle)
    ], AdsenseSavedadstylesGetResponse.prototype, "savedAdStyle", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseSavedadstylesGetResponse.prototype, "statusCode", void 0);
    return AdsenseSavedadstylesGetResponse;
}(SpeakeasyBase));
export { AdsenseSavedadstylesGetResponse };
