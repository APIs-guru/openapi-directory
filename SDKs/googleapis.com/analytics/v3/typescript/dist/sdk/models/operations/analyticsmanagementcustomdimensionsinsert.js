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
var AnalyticsManagementCustomDimensionsInsertPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsInsertPathParams, _super);
    function AnalyticsManagementCustomDimensionsInsertPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsInsertPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsInsertPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementCustomDimensionsInsertPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsInsertPathParams };
var AnalyticsManagementCustomDimensionsInsertQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsInsertQueryParams, _super);
    function AnalyticsManagementCustomDimensionsInsertQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsInsertQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsInsertQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsInsertQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsInsertQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomDimensionsInsertQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsInsertQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsInsertQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementCustomDimensionsInsertQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsInsertQueryParams };
var AnalyticsManagementCustomDimensionsInsertSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsInsertSecurity, _super);
    function AnalyticsManagementCustomDimensionsInsertSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomDimensionsInsertSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomDimensionsInsertSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomDimensionsInsertSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsInsertSecurity };
var AnalyticsManagementCustomDimensionsInsertRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsInsertRequest, _super);
    function AnalyticsManagementCustomDimensionsInsertRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomDimensionsInsertPathParams)
    ], AnalyticsManagementCustomDimensionsInsertRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomDimensionsInsertQueryParams)
    ], AnalyticsManagementCustomDimensionsInsertRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomDimensionInput)
    ], AnalyticsManagementCustomDimensionsInsertRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomDimensionsInsertSecurity)
    ], AnalyticsManagementCustomDimensionsInsertRequest.prototype, "security", void 0);
    return AnalyticsManagementCustomDimensionsInsertRequest;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsInsertRequest };
var AnalyticsManagementCustomDimensionsInsertResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsInsertResponse, _super);
    function AnalyticsManagementCustomDimensionsInsertResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsInsertResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomDimension)
    ], AnalyticsManagementCustomDimensionsInsertResponse.prototype, "customDimension", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomDimensionsInsertResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementCustomDimensionsInsertResponse;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsInsertResponse };
