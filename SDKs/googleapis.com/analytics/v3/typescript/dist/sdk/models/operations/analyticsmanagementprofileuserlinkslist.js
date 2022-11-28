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
var AnalyticsManagementProfileUserLinksListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileUserLinksListPathParams, _super);
    function AnalyticsManagementProfileUserLinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=profileId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksListPathParams.prototype, "profileId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementProfileUserLinksListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfileUserLinksListPathParams };
var AnalyticsManagementProfileUserLinksListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileUserLinksListQueryParams, _super);
    function AnalyticsManagementProfileUserLinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfileUserLinksListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementProfileUserLinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfileUserLinksListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementProfileUserLinksListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementProfileUserLinksListQueryParams };
var AnalyticsManagementProfileUserLinksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileUserLinksListSecurityOption1, _super);
    function AnalyticsManagementProfileUserLinksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfileUserLinksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfileUserLinksListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfileUserLinksListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementProfileUserLinksListSecurityOption1 };
var AnalyticsManagementProfileUserLinksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileUserLinksListSecurityOption2, _super);
    function AnalyticsManagementProfileUserLinksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementProfileUserLinksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementProfileUserLinksListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementProfileUserLinksListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementProfileUserLinksListSecurityOption2 };
var AnalyticsManagementProfileUserLinksListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileUserLinksListSecurity, _super);
    function AnalyticsManagementProfileUserLinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementProfileUserLinksListSecurityOption1)
    ], AnalyticsManagementProfileUserLinksListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementProfileUserLinksListSecurityOption2)
    ], AnalyticsManagementProfileUserLinksListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementProfileUserLinksListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementProfileUserLinksListSecurity };
var AnalyticsManagementProfileUserLinksListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileUserLinksListRequest, _super);
    function AnalyticsManagementProfileUserLinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileUserLinksListPathParams)
    ], AnalyticsManagementProfileUserLinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileUserLinksListQueryParams)
    ], AnalyticsManagementProfileUserLinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementProfileUserLinksListSecurity)
    ], AnalyticsManagementProfileUserLinksListRequest.prototype, "security", void 0);
    return AnalyticsManagementProfileUserLinksListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementProfileUserLinksListRequest };
var AnalyticsManagementProfileUserLinksListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementProfileUserLinksListResponse, _super);
    function AnalyticsManagementProfileUserLinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementProfileUserLinksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EntityUserLinks)
    ], AnalyticsManagementProfileUserLinksListResponse.prototype, "entityUserLinks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementProfileUserLinksListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementProfileUserLinksListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementProfileUserLinksListResponse };
