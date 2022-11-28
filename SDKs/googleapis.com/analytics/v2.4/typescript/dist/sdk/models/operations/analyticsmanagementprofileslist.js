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
var AnalyticsManagementProfilesListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesListPathParams, _super);
    function AnalyticsManagementProfilesListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementProfilesListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesListPathParams };
var AnalyticsManagementProfilesListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesListQueryParams, _super);
    function AnalyticsManagementProfilesListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfilesListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementProfilesListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfilesListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementProfilesListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesListQueryParams };
var AnalyticsManagementProfilesListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesListSecurityOption1, _super);
    function AnalyticsManagementProfilesListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfilesListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfilesListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfilesListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesListSecurityOption1 };
var AnalyticsManagementProfilesListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesListSecurityOption2, _super);
    function AnalyticsManagementProfilesListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfilesListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfilesListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfilesListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesListSecurityOption2 };
var AnalyticsManagementProfilesListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesListSecurity, _super);
    function AnalyticsManagementProfilesListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementProfilesListSecurityOption1)
    ], AnalyticsManagementProfilesListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementProfilesListSecurityOption2)
    ], AnalyticsManagementProfilesListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementProfilesListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesListSecurity };
var AnalyticsManagementProfilesListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesListRequest, _super);
    function AnalyticsManagementProfilesListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfilesListPathParams)
    ], AnalyticsManagementProfilesListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfilesListQueryParams)
    ], AnalyticsManagementProfilesListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfilesListSecurity)
    ], AnalyticsManagementProfilesListRequest.prototype, "security", void 0);
    return AnalyticsManagementProfilesListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesListRequest };
var AnalyticsManagementProfilesListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfilesListResponse, _super);
    function AnalyticsManagementProfilesListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementProfilesListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfilesListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementProfilesListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementProfilesListResponse };
