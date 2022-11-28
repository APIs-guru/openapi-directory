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
var AdsenseMetadataDimensionsListQueryParams = /** @class */ (function (_super) {
    __extends(AdsenseMetadataDimensionsListQueryParams, _super);
    function AdsenseMetadataDimensionsListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AdsenseMetadataDimensionsListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AdsenseMetadataDimensionsListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AdsenseMetadataDimensionsListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AdsenseMetadataDimensionsListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AdsenseMetadataDimensionsListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AdsenseMetadataDimensionsListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AdsenseMetadataDimensionsListQueryParams.prototype, "userIp", void 0);
    return AdsenseMetadataDimensionsListQueryParams;
}(SpeakeasyBase));
export { AdsenseMetadataDimensionsListQueryParams };
var AdsenseMetadataDimensionsListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AdsenseMetadataDimensionsListSecurityOption1, _super);
    function AdsenseMetadataDimensionsListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseMetadataDimensionsListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseMetadataDimensionsListSecurityOption1.prototype, "oauth2c", void 0);
    return AdsenseMetadataDimensionsListSecurityOption1;
}(SpeakeasyBase));
export { AdsenseMetadataDimensionsListSecurityOption1 };
var AdsenseMetadataDimensionsListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AdsenseMetadataDimensionsListSecurityOption2, _super);
    function AdsenseMetadataDimensionsListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AdsenseMetadataDimensionsListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AdsenseMetadataDimensionsListSecurityOption2.prototype, "oauth2c", void 0);
    return AdsenseMetadataDimensionsListSecurityOption2;
}(SpeakeasyBase));
export { AdsenseMetadataDimensionsListSecurityOption2 };
var AdsenseMetadataDimensionsListSecurity = /** @class */ (function (_super) {
    __extends(AdsenseMetadataDimensionsListSecurity, _super);
    function AdsenseMetadataDimensionsListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseMetadataDimensionsListSecurityOption1)
    ], AdsenseMetadataDimensionsListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AdsenseMetadataDimensionsListSecurityOption2)
    ], AdsenseMetadataDimensionsListSecurity.prototype, "option2", void 0);
    return AdsenseMetadataDimensionsListSecurity;
}(SpeakeasyBase));
export { AdsenseMetadataDimensionsListSecurity };
var AdsenseMetadataDimensionsListRequest = /** @class */ (function (_super) {
    __extends(AdsenseMetadataDimensionsListRequest, _super);
    function AdsenseMetadataDimensionsListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseMetadataDimensionsListQueryParams)
    ], AdsenseMetadataDimensionsListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AdsenseMetadataDimensionsListSecurity)
    ], AdsenseMetadataDimensionsListRequest.prototype, "security", void 0);
    return AdsenseMetadataDimensionsListRequest;
}(SpeakeasyBase));
export { AdsenseMetadataDimensionsListRequest };
var AdsenseMetadataDimensionsListResponse = /** @class */ (function (_super) {
    __extends(AdsenseMetadataDimensionsListResponse, _super);
    function AdsenseMetadataDimensionsListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AdsenseMetadataDimensionsListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Metadata)
    ], AdsenseMetadataDimensionsListResponse.prototype, "metadata", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AdsenseMetadataDimensionsListResponse.prototype, "statusCode", void 0);
    return AdsenseMetadataDimensionsListResponse;
}(SpeakeasyBase));
export { AdsenseMetadataDimensionsListResponse };
