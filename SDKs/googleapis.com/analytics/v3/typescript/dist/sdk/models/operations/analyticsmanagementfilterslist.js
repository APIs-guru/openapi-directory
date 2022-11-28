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
var AnalyticsManagementFiltersListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersListPathParams, _super);
    function AnalyticsManagementFiltersListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersListPathParams.prototype, "accountId", void 0);
    return AnalyticsManagementFiltersListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersListPathParams };
var AnalyticsManagementFiltersListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersListQueryParams, _super);
    function AnalyticsManagementFiltersListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementFiltersListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementFiltersListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementFiltersListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementFiltersListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersListQueryParams };
var AnalyticsManagementFiltersListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersListSecurityOption1, _super);
    function AnalyticsManagementFiltersListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementFiltersListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementFiltersListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementFiltersListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersListSecurityOption1 };
var AnalyticsManagementFiltersListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersListSecurityOption2, _super);
    function AnalyticsManagementFiltersListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementFiltersListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementFiltersListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementFiltersListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersListSecurityOption2 };
var AnalyticsManagementFiltersListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersListSecurity, _super);
    function AnalyticsManagementFiltersListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementFiltersListSecurityOption1)
    ], AnalyticsManagementFiltersListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementFiltersListSecurityOption2)
    ], AnalyticsManagementFiltersListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementFiltersListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersListSecurity };
var AnalyticsManagementFiltersListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersListRequest, _super);
    function AnalyticsManagementFiltersListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementFiltersListPathParams)
    ], AnalyticsManagementFiltersListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementFiltersListQueryParams)
    ], AnalyticsManagementFiltersListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementFiltersListSecurity)
    ], AnalyticsManagementFiltersListRequest.prototype, "security", void 0);
    return AnalyticsManagementFiltersListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersListRequest };
var AnalyticsManagementFiltersListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementFiltersListResponse, _super);
    function AnalyticsManagementFiltersListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementFiltersListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.Filters)
    ], AnalyticsManagementFiltersListResponse.prototype, "filters", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementFiltersListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementFiltersListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementFiltersListResponse };
