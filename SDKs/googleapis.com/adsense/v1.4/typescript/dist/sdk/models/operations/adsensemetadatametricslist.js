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
var AdsenseMetadataMetricsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseMetadataMetricsListQueryParams, _super);
    function AdsenseMetadataMetricsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseMetadataMetricsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseMetadataMetricsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseMetadataMetricsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseMetadataMetricsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseMetadataMetricsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseMetadataMetricsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseMetadataMetricsListQueryParams.prototype, "userIp", void 0);
    return AdsenseMetadataMetricsListQueryParams;
}(SpeakeasyBase));
export { AdsenseMetadataMetricsListQueryParams };
var AdsenseMetadataMetricsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseMetadataMetricsListSecurityOption1, _super);
    function AdsenseMetadataMetricsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseMetadataMetricsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseMetadataMetricsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseMetadataMetricsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseMetadataMetricsListSecurityOption1 };
var AdsenseMetadataMetricsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseMetadataMetricsListSecurityOption2, _super);
    function AdsenseMetadataMetricsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseMetadataMetricsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseMetadataMetricsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseMetadataMetricsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseMetadataMetricsListSecurityOption2 };
var AdsenseMetadataMetricsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseMetadataMetricsListSecurity, _super);
    function AdsenseMetadataMetricsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseMetadataMetricsListSecurityOption1)
    ], AdsenseMetadataMetricsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseMetadataMetricsListSecurityOption2)
    ], AdsenseMetadataMetricsListSecurity.prototype, "option2", void 0);
    return AdsenseMetadataMetricsListSecurity;
}(SpeakeasyBase));
export { AdsenseMetadataMetricsListSecurity };
var AdsenseMetadataMetricsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseMetadataMetricsListRequest, _super);
    function AdsenseMetadataMetricsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseMetadataMetricsListQueryParams)
    ], AdsenseMetadataMetricsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseMetadataMetricsListSecurity)
    ], AdsenseMetadataMetricsListRequest.prototype, "security", void 0);
    return AdsenseMetadataMetricsListRequest;
}(SpeakeasyBase));
export { AdsenseMetadataMetricsListRequest };
var AdsenseMetadataMetricsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseMetadataMetricsListResponse, _super);
    function AdsenseMetadataMetricsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseMetadataMetricsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Metadata)
    ], AdsenseMetadataMetricsListResponse.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseMetadataMetricsListResponse.prototype, "statusCode", void 0);
    return AdsenseMetadataMetricsListResponse;
}(SpeakeasyBase));
export { AdsenseMetadataMetricsListResponse };
