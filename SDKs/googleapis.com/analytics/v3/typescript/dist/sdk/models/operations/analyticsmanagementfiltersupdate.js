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
var AnalyticsManagementFiltersUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersUpdatePathParams, _super);
    function AnalyticsManagementFiltersUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filterId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersUpdatePathParams.prototype, "filterId", void 0);
    return AnalyticsManagementFiltersUpdatePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersUpdatePathParams };
var AnalyticsManagementFiltersUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersUpdateQueryParams, _super);
    function AnalyticsManagementFiltersUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementFiltersUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementFiltersUpdateQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersUpdateQueryParams };
var AnalyticsManagementFiltersUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersUpdateSecurity, _super);
    function AnalyticsManagementFiltersUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementFiltersUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementFiltersUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementFiltersUpdateSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersUpdateSecurity };
var AnalyticsManagementFiltersUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersUpdateRequest, _super);
    function AnalyticsManagementFiltersUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementFiltersUpdatePathParams)
    ], AnalyticsManagementFiltersUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementFiltersUpdateQueryParams)
    ], AnalyticsManagementFiltersUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.FilterInput)
    ], AnalyticsManagementFiltersUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementFiltersUpdateSecurity)
    ], AnalyticsManagementFiltersUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementFiltersUpdateRequest;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersUpdateRequest };
var AnalyticsManagementFiltersUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersUpdateResponse, _super);
    function AnalyticsManagementFiltersUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Filter)
    ], AnalyticsManagementFiltersUpdateResponse.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementFiltersUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementFiltersUpdateResponse;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersUpdateResponse };
