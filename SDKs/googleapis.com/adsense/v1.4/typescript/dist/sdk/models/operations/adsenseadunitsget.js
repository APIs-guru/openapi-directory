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
var AdsenseAdunitsGetPathParams = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetPathParams, _super);
    function AdsenseAdunitsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adClientId" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetPathParams.prototype, "adClientId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=adUnitId" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetPathParams.prototype, "adUnitId", void 0);
    return AdsenseAdunitsGetPathParams;
}(SpeakeasyBase));
export { AdsenseAdunitsGetPathParams };
var AdsenseAdunitsGetQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetQueryParams, _super);
    function AdsenseAdunitsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseAdunitsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetQueryParams.prototype, "userIp", void 0);
    return AdsenseAdunitsGetQueryParams;
}(SpeakeasyBase));
export { AdsenseAdunitsGetQueryParams };
var AdsenseAdunitsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetSecurityOption1, _super);
    function AdsenseAdunitsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAdunitsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAdunitsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseAdunitsGetSecurityOption1;
}(SpeakeasyBase));
export { AdsenseAdunitsGetSecurityOption1 };
var AdsenseAdunitsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetSecurityOption2, _super);
    function AdsenseAdunitsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseAdunitsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseAdunitsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseAdunitsGetSecurityOption2;
}(SpeakeasyBase));
export { AdsenseAdunitsGetSecurityOption2 };
var AdsenseAdunitsGetSecurity = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetSecurity, _super);
    function AdsenseAdunitsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAdunitsGetSecurityOption1)
    ], AdsenseAdunitsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseAdunitsGetSecurityOption2)
    ], AdsenseAdunitsGetSecurity.prototype, "option2", void 0);
    return AdsenseAdunitsGetSecurity;
}(SpeakeasyBase));
export { AdsenseAdunitsGetSecurity };
var AdsenseAdunitsGetRequest = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetRequest, _super);
    function AdsenseAdunitsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAdunitsGetPathParams)
    ], AdsenseAdunitsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAdunitsGetQueryParams)
    ], AdsenseAdunitsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseAdunitsGetSecurity)
    ], AdsenseAdunitsGetRequest.prototype, "security", void 0);
    return AdsenseAdunitsGetRequest;
}(SpeakeasyBase));
export { AdsenseAdunitsGetRequest };
var AdsenseAdunitsGetResponse = /** @class */ (function (_super) {
    __extends(AdsenseAdunitsGetResponse, _super);
    function AdsenseAdunitsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.AdUnit)
    ], AdsenseAdunitsGetResponse.prototype, "adUnit", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseAdunitsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseAdunitsGetResponse.prototype, "statusCode", void 0);
    return AdsenseAdunitsGetResponse;
}(SpeakeasyBase));
export { AdsenseAdunitsGetResponse };
