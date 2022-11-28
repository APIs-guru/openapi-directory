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
var AnalyticsDataRealtimeGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsDataRealtimeGetQueryParams, _super);
    function AnalyticsDataRealtimeGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dimensions" }),
        __metadata("design:type", String)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "dimensions", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=filters" }),
        __metadata("design:type", String)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ids" }),
        __metadata("design:type", String)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "ids", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metrics" }),
        __metadata("design:type", String)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "metrics", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=sort" }),
        __metadata("design:type", String)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "sort", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsDataRealtimeGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsDataRealtimeGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsDataRealtimeGetQueryParams };
var AnalyticsDataRealtimeGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsDataRealtimeGetSecurityOption1, _super);
    function AnalyticsDataRealtimeGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsDataRealtimeGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsDataRealtimeGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsDataRealtimeGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsDataRealtimeGetSecurityOption1 };
var AnalyticsDataRealtimeGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsDataRealtimeGetSecurityOption2, _super);
    function AnalyticsDataRealtimeGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsDataRealtimeGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsDataRealtimeGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsDataRealtimeGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsDataRealtimeGetSecurityOption2 };
var AnalyticsDataRealtimeGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsDataRealtimeGetSecurity, _super);
    function AnalyticsDataRealtimeGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsDataRealtimeGetSecurityOption1)
    ], AnalyticsDataRealtimeGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsDataRealtimeGetSecurityOption2)
    ], AnalyticsDataRealtimeGetSecurity.prototype, "option2", void 0);
    return AnalyticsDataRealtimeGetSecurity;
}(SpeakeasyBase));
export { AnalyticsDataRealtimeGetSecurity };
var AnalyticsDataRealtimeGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsDataRealtimeGetRequest, _super);
    function AnalyticsDataRealtimeGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsDataRealtimeGetQueryParams)
    ], AnalyticsDataRealtimeGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsDataRealtimeGetSecurity)
    ], AnalyticsDataRealtimeGetRequest.prototype, "security", void 0);
    return AnalyticsDataRealtimeGetRequest;
}(SpeakeasyBase));
export { AnalyticsDataRealtimeGetRequest };
var AnalyticsDataRealtimeGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsDataRealtimeGetResponse, _super);
    function AnalyticsDataRealtimeGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsDataRealtimeGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.RealtimeData)
    ], AnalyticsDataRealtimeGetResponse.prototype, "realtimeData", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsDataRealtimeGetResponse.prototype, "statusCode", void 0);
    return AnalyticsDataRealtimeGetResponse;
}(SpeakeasyBase));
export { AnalyticsDataRealtimeGetResponse };
