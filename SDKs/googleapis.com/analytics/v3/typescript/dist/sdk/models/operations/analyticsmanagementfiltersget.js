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
var AnalyticsManagementFiltersGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersGetPathParams, _super);
    function AnalyticsManagementFiltersGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=filterId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersGetPathParams.prototype, "filterId", void 0);
    return AnalyticsManagementFiltersGetPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersGetPathParams };
var AnalyticsManagementFiltersGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersGetQueryParams, _super);
    function AnalyticsManagementFiltersGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementFiltersGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementFiltersGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersGetQueryParams };
var AnalyticsManagementFiltersGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersGetSecurityOption1, _super);
    function AnalyticsManagementFiltersGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementFiltersGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementFiltersGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementFiltersGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersGetSecurityOption1 };
var AnalyticsManagementFiltersGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersGetSecurityOption2, _super);
    function AnalyticsManagementFiltersGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementFiltersGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementFiltersGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementFiltersGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersGetSecurityOption2 };
var AnalyticsManagementFiltersGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersGetSecurity, _super);
    function AnalyticsManagementFiltersGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementFiltersGetSecurityOption1)
    ], AnalyticsManagementFiltersGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementFiltersGetSecurityOption2)
    ], AnalyticsManagementFiltersGetSecurity.prototype, "option2", void 0);
    return AnalyticsManagementFiltersGetSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersGetSecurity };
var AnalyticsManagementFiltersGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersGetRequest, _super);
    function AnalyticsManagementFiltersGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementFiltersGetPathParams)
    ], AnalyticsManagementFiltersGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementFiltersGetQueryParams)
    ], AnalyticsManagementFiltersGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementFiltersGetSecurity)
    ], AnalyticsManagementFiltersGetRequest.prototype, "security", void 0);
    return AnalyticsManagementFiltersGetRequest;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersGetRequest };
var AnalyticsManagementFiltersGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersGetResponse, _super);
    function AnalyticsManagementFiltersGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Filter)
    ], AnalyticsManagementFiltersGetResponse.prototype, "filter", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementFiltersGetResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementFiltersGetResponse;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersGetResponse };
