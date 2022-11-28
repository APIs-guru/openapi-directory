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
var AnalyticsreportingUserActivitySearchQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsreportingUserActivitySearchQueryParams, _super);
    function AnalyticsreportingUserActivitySearchQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=$.xgafv" }),
        __metadata("design:type", String)
    ], AnalyticsreportingUserActivitySearchQueryParams.prototype, "dollarXgafv", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=access_token" }),
        __metadata("design:type", String)
    ], AnalyticsreportingUserActivitySearchQueryParams.prototype, "accessToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsreportingUserActivitySearchQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=callback" }),
        __metadata("design:type", String)
    ], AnalyticsreportingUserActivitySearchQueryParams.prototype, "callback", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsreportingUserActivitySearchQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsreportingUserActivitySearchQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsreportingUserActivitySearchQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsreportingUserActivitySearchQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsreportingUserActivitySearchQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uploadType" }),
        __metadata("design:type", String)
    ], AnalyticsreportingUserActivitySearchQueryParams.prototype, "uploadType", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=upload_protocol" }),
        __metadata("design:type", String)
    ], AnalyticsreportingUserActivitySearchQueryParams.prototype, "uploadProtocol", void 0);
    return AnalyticsreportingUserActivitySearchQueryParams;
}(SpeakeasyBase));
export { AnalyticsreportingUserActivitySearchQueryParams };
var AnalyticsreportingUserActivitySearchSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsreportingUserActivitySearchSecurityOption1, _super);
    function AnalyticsreportingUserActivitySearchSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsreportingUserActivitySearchSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsreportingUserActivitySearchSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsreportingUserActivitySearchSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsreportingUserActivitySearchSecurityOption1 };
var AnalyticsreportingUserActivitySearchSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsreportingUserActivitySearchSecurityOption2, _super);
    function AnalyticsreportingUserActivitySearchSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsreportingUserActivitySearchSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsreportingUserActivitySearchSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsreportingUserActivitySearchSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsreportingUserActivitySearchSecurityOption2 };
var AnalyticsreportingUserActivitySearchSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsreportingUserActivitySearchSecurity, _super);
    function AnalyticsreportingUserActivitySearchSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsreportingUserActivitySearchSecurityOption1)
    ], AnalyticsreportingUserActivitySearchSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsreportingUserActivitySearchSecurityOption2)
    ], AnalyticsreportingUserActivitySearchSecurity.prototype, "option2", void 0);
    return AnalyticsreportingUserActivitySearchSecurity;
}(SpeakeasyBase));
export { AnalyticsreportingUserActivitySearchSecurity };
var AnalyticsreportingUserActivitySearchRequest = /** @class */ (function (_super) {
    __extends(AnalyticsreportingUserActivitySearchRequest, _super);
    function AnalyticsreportingUserActivitySearchRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsreportingUserActivitySearchQueryParams)
    ], AnalyticsreportingUserActivitySearchRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.SearchUserActivityRequest)
    ], AnalyticsreportingUserActivitySearchRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsreportingUserActivitySearchSecurity)
    ], AnalyticsreportingUserActivitySearchRequest.prototype, "security", void 0);
    return AnalyticsreportingUserActivitySearchRequest;
}(SpeakeasyBase));
export { AnalyticsreportingUserActivitySearchRequest };
var AnalyticsreportingUserActivitySearchResponse = /** @class */ (function (_super) {
    __extends(AnalyticsreportingUserActivitySearchResponse, _super);
    function AnalyticsreportingUserActivitySearchResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsreportingUserActivitySearchResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.SearchUserActivityResponse)
    ], AnalyticsreportingUserActivitySearchResponse.prototype, "searchUserActivityResponse", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsreportingUserActivitySearchResponse.prototype, "statusCode", void 0);
    return AnalyticsreportingUserActivitySearchResponse;
}(SpeakeasyBase));
export { AnalyticsreportingUserActivitySearchResponse };
