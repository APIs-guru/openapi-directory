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
var AnalyticsManagementProfileFilterLinksListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksListPathParams, _super);
    function AnalyticsManagementProfileFilterLinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksListPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementProfileFilterLinksListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksListPathParams };
var AnalyticsManagementProfileFilterLinksListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksListQueryParams, _super);
    function AnalyticsManagementProfileFilterLinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfileFilterLinksListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementProfileFilterLinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfileFilterLinksListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementProfileFilterLinksListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksListQueryParams };
var AnalyticsManagementProfileFilterLinksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksListSecurityOption1, _super);
    function AnalyticsManagementProfileFilterLinksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfileFilterLinksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfileFilterLinksListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfileFilterLinksListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksListSecurityOption1 };
var AnalyticsManagementProfileFilterLinksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksListSecurityOption2, _super);
    function AnalyticsManagementProfileFilterLinksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfileFilterLinksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfileFilterLinksListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfileFilterLinksListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksListSecurityOption2 };
var AnalyticsManagementProfileFilterLinksListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksListSecurity, _super);
    function AnalyticsManagementProfileFilterLinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksListSecurityOption1)
    ], AnalyticsManagementProfileFilterLinksListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksListSecurityOption2)
    ], AnalyticsManagementProfileFilterLinksListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementProfileFilterLinksListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksListSecurity };
var AnalyticsManagementProfileFilterLinksListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksListRequest, _super);
    function AnalyticsManagementProfileFilterLinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksListPathParams)
    ], AnalyticsManagementProfileFilterLinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksListQueryParams)
    ], AnalyticsManagementProfileFilterLinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileFilterLinksListSecurity)
    ], AnalyticsManagementProfileFilterLinksListRequest.prototype, "security", void 0);
    return AnalyticsManagementProfileFilterLinksListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksListRequest };
var AnalyticsManagementProfileFilterLinksListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileFilterLinksListResponse, _super);
    function AnalyticsManagementProfileFilterLinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileFilterLinksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.ProfileFilterLinks)
    ], AnalyticsManagementProfileFilterLinksListResponse.prototype, "profileFilterLinks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfileFilterLinksListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementProfileFilterLinksListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementProfileFilterLinksListResponse };
