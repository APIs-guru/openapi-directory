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
var AnalyticsManagementCustomDimensionsUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsUpdatePathParams, _super);
    function AnalyticsManagementCustomDimensionsUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=customDimensionId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsUpdatePathParams.prototype, "customDimensionId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsUpdatePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementCustomDimensionsUpdatePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsUpdatePathParams };
var AnalyticsManagementCustomDimensionsUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsUpdateQueryParams, _super);
    function AnalyticsManagementCustomDimensionsUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ignoreCustomDataSourceLinks" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomDimensionsUpdateQueryParams.prototype, "ignoreCustomDataSourceLinks", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomDimensionsUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementCustomDimensionsUpdateQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsUpdateQueryParams };
var AnalyticsManagementCustomDimensionsUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsUpdateSecurity, _super);
    function AnalyticsManagementCustomDimensionsUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomDimensionsUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomDimensionsUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomDimensionsUpdateSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsUpdateSecurity };
var AnalyticsManagementCustomDimensionsUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsUpdateRequest, _super);
    function AnalyticsManagementCustomDimensionsUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomDimensionsUpdatePathParams)
    ], AnalyticsManagementCustomDimensionsUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomDimensionsUpdateQueryParams)
    ], AnalyticsManagementCustomDimensionsUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.CustomDimensionInput)
    ], AnalyticsManagementCustomDimensionsUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomDimensionsUpdateSecurity)
    ], AnalyticsManagementCustomDimensionsUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementCustomDimensionsUpdateRequest;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsUpdateRequest };
var AnalyticsManagementCustomDimensionsUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDimensionsUpdateResponse, _super);
    function AnalyticsManagementCustomDimensionsUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDimensionsUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomDimension)
    ], AnalyticsManagementCustomDimensionsUpdateResponse.prototype, "customDimension", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomDimensionsUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementCustomDimensionsUpdateResponse;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDimensionsUpdateResponse };
