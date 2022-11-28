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
var AnalyticsManagementCustomDataSourcesListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDataSourcesListPathParams, _super);
    function AnalyticsManagementCustomDataSourcesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDataSourcesListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDataSourcesListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementCustomDataSourcesListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDataSourcesListPathParams };
var AnalyticsManagementCustomDataSourcesListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDataSourcesListQueryParams, _super);
    function AnalyticsManagementCustomDataSourcesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDataSourcesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDataSourcesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDataSourcesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomDataSourcesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDataSourcesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementCustomDataSourcesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDataSourcesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomDataSourcesListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDataSourcesListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementCustomDataSourcesListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDataSourcesListQueryParams };
var AnalyticsManagementCustomDataSourcesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDataSourcesListSecurityOption1, _super);
    function AnalyticsManagementCustomDataSourcesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomDataSourcesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomDataSourcesListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomDataSourcesListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDataSourcesListSecurityOption1 };
var AnalyticsManagementCustomDataSourcesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDataSourcesListSecurityOption2, _super);
    function AnalyticsManagementCustomDataSourcesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomDataSourcesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomDataSourcesListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomDataSourcesListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDataSourcesListSecurityOption2 };
var AnalyticsManagementCustomDataSourcesListSecurityOption3 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDataSourcesListSecurityOption3, _super);
    function AnalyticsManagementCustomDataSourcesListSecurityOption3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementCustomDataSourcesListSecurityOption3.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementCustomDataSourcesListSecurityOption3.prototype, "oauth2c", void 0);
    return AnalyticsManagementCustomDataSourcesListSecurityOption3;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDataSourcesListSecurityOption3 };
var AnalyticsManagementCustomDataSourcesListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDataSourcesListSecurity, _super);
    function AnalyticsManagementCustomDataSourcesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementCustomDataSourcesListSecurityOption1)
    ], AnalyticsManagementCustomDataSourcesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementCustomDataSourcesListSecurityOption2)
    ], AnalyticsManagementCustomDataSourcesListSecurity.prototype, "option2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementCustomDataSourcesListSecurityOption3)
    ], AnalyticsManagementCustomDataSourcesListSecurity.prototype, "option3", void 0);
    return AnalyticsManagementCustomDataSourcesListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDataSourcesListSecurity };
var AnalyticsManagementCustomDataSourcesListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDataSourcesListRequest, _super);
    function AnalyticsManagementCustomDataSourcesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomDataSourcesListPathParams)
    ], AnalyticsManagementCustomDataSourcesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomDataSourcesListQueryParams)
    ], AnalyticsManagementCustomDataSourcesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementCustomDataSourcesListSecurity)
    ], AnalyticsManagementCustomDataSourcesListRequest.prototype, "security", void 0);
    return AnalyticsManagementCustomDataSourcesListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDataSourcesListRequest };
var AnalyticsManagementCustomDataSourcesListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementCustomDataSourcesListResponse, _super);
    function AnalyticsManagementCustomDataSourcesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementCustomDataSourcesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.CustomDataSources)
    ], AnalyticsManagementCustomDataSourcesListResponse.prototype, "customDataSources", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementCustomDataSourcesListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementCustomDataSourcesListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementCustomDataSourcesListResponse };
