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
var AnalyticsManagementWebpropertiesListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesListPathParams, _super);
    function AnalyticsManagementWebpropertiesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesListPathParams.prototype, "accountId", void 0);
    return AnalyticsManagementWebpropertiesListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesListPathParams };
var AnalyticsManagementWebpropertiesListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesListQueryParams, _super);
    function AnalyticsManagementWebpropertiesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesListQueryParams.prototype, "alt", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesListQueryParams.prototype, "fields", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesListQueryParams.prototype, "key", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebpropertiesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementWebpropertiesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebpropertiesListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        Metadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementWebpropertiesListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesListQueryParams };
var AnalyticsManagementWebpropertiesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesListSecurityOption1, _super);
    function AnalyticsManagementWebpropertiesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebpropertiesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebpropertiesListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebpropertiesListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesListSecurityOption1 };
var AnalyticsManagementWebpropertiesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesListSecurityOption2, _super);
    function AnalyticsManagementWebpropertiesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebpropertiesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        Metadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebpropertiesListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebpropertiesListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesListSecurityOption2 };
var AnalyticsManagementWebpropertiesListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesListSecurity, _super);
    function AnalyticsManagementWebpropertiesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementWebpropertiesListSecurityOption1)
    ], AnalyticsManagementWebpropertiesListSecurity.prototype, "option1", void 0);
    __decorate([
        Metadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementWebpropertiesListSecurityOption2)
    ], AnalyticsManagementWebpropertiesListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementWebpropertiesListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesListSecurity };
var AnalyticsManagementWebpropertiesListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesListRequest, _super);
    function AnalyticsManagementWebpropertiesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", AnalyticsManagementWebpropertiesListPathParams)
    ], AnalyticsManagementWebpropertiesListRequest.prototype, "pathParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AnalyticsManagementWebpropertiesListQueryParams)
    ], AnalyticsManagementWebpropertiesListRequest.prototype, "queryParams", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", AnalyticsManagementWebpropertiesListSecurity)
    ], AnalyticsManagementWebpropertiesListRequest.prototype, "security", void 0);
    return AnalyticsManagementWebpropertiesListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesListRequest };
var AnalyticsManagementWebpropertiesListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebpropertiesListResponse, _super);
    function AnalyticsManagementWebpropertiesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        Metadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementWebpropertiesListResponse.prototype, "contentType", void 0);
    __decorate([
        Metadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebpropertiesListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementWebpropertiesListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementWebpropertiesListResponse };
