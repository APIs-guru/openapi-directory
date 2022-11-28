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
var AnalyticsManagementCustomDimensionsGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsGetPathParams, _super);
    function AnalyticsManagementCustomDimensionsGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customDimensionId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsGetPathParams.prototype, "customDimensionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsGetPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementCustomDimensionsGetPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsGetPathParams };
var AnalyticsManagementCustomDimensionsGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsGetQueryParams, _super);
    function AnalyticsManagementCustomDimensionsGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomDimensionsGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementCustomDimensionsGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsGetQueryParams };
var AnalyticsManagementCustomDimensionsGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsGetSecurityOption1, _super);
    function AnalyticsManagementCustomDimensionsGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomDimensionsGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomDimensionsGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomDimensionsGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsGetSecurityOption1 };
var AnalyticsManagementCustomDimensionsGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsGetSecurityOption2, _super);
    function AnalyticsManagementCustomDimensionsGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomDimensionsGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomDimensionsGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomDimensionsGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsGetSecurityOption2 };
var AnalyticsManagementCustomDimensionsGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsGetSecurity, _super);
    function AnalyticsManagementCustomDimensionsGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementCustomDimensionsGetSecurityOption1)
    ], AnalyticsManagementCustomDimensionsGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementCustomDimensionsGetSecurityOption2)
    ], AnalyticsManagementCustomDimensionsGetSecurity.prototype, "option2", void 0);
    return AnalyticsManagementCustomDimensionsGetSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsGetSecurity };
var AnalyticsManagementCustomDimensionsGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsGetRequest, _super);
    function AnalyticsManagementCustomDimensionsGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomDimensionsGetPathParams)
    ], AnalyticsManagementCustomDimensionsGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomDimensionsGetQueryParams)
    ], AnalyticsManagementCustomDimensionsGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomDimensionsGetSecurity)
    ], AnalyticsManagementCustomDimensionsGetRequest.prototype, "security", void 0);
    return AnalyticsManagementCustomDimensionsGetRequest;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsGetRequest };
var AnalyticsManagementCustomDimensionsGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsGetResponse, _super);
    function AnalyticsManagementCustomDimensionsGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomDimension)
    ], AnalyticsManagementCustomDimensionsGetResponse.prototype, "customDimension", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomDimensionsGetResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementCustomDimensionsGetResponse;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsGetResponse };
