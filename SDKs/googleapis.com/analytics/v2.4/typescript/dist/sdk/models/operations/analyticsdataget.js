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
import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
var AnalyticsDataGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsDataGetQueryParams, _super);
    function AnalyticsDataGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=dimensions" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "dimensions", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=end-date" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "endDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "filters", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "ids", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsDataGetQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "metrics", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsDataGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=segment" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "segment", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "sort", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start-date" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "startDate", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsDataGetQueryParams.prototype, "startIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsDataGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsDataGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsDataGetQueryParams };
var AnalyticsDataGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsDataGetSecurityOption1, _super);
    function AnalyticsDataGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsDataGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsDataGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsDataGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsDataGetSecurityOption1 };
var AnalyticsDataGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsDataGetSecurityOption2, _super);
    function AnalyticsDataGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsDataGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsDataGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsDataGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsDataGetSecurityOption2 };
var AnalyticsDataGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsDataGetSecurity, _super);
    function AnalyticsDataGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsDataGetSecurityOption1)
    ], AnalyticsDataGetSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsDataGetSecurityOption2)
    ], AnalyticsDataGetSecurity.prototype, "option2", void 0);
    return AnalyticsDataGetSecurity;
}(SpeakeasyBase));
export { AnalyticsDataGetSecurity };
var AnalyticsDataGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsDataGetRequest, _super);
    function AnalyticsDataGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AnalyticsDataGetQueryParams)
    ], AnalyticsDataGetRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AnalyticsDataGetSecurity)
    ], AnalyticsDataGetRequest.prototype, "security", void 0);
    return AnalyticsDataGetRequest;
}(SpeakeasyBase));
export { AnalyticsDataGetRequest };
var AnalyticsDataGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsDataGetResponse, _super);
    function AnalyticsDataGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AnalyticsDataGetResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AnalyticsDataGetResponse.prototype, "statusCode", void 0);
    return AnalyticsDataGetResponse;
}(SpeakeasyBase));
export { AnalyticsDataGetResponse };
