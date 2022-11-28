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
var AnalyticsManagementWebPropertyAdWordsLinksListPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksListPathParams, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksListPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksListPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksListPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksListPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksListPathParams };
var AnalyticsManagementWebPropertyAdWordsLinksListQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksListQueryParams, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksListQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksListQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksListQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksListQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max-results" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebPropertyAdWordsLinksListQueryParams.prototype, "maxResults", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksListQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementWebPropertyAdWordsLinksListQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksListQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start-index" }),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebPropertyAdWordsLinksListQueryParams.prototype, "startIndex", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksListQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksListQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksListQueryParams };
var AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1 };
var AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2 };
var AnalyticsManagementWebPropertyAdWordsLinksListSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksListSecurity, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksListSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1)
    ], AnalyticsManagementWebPropertyAdWordsLinksListSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2)
    ], AnalyticsManagementWebPropertyAdWordsLinksListSecurity.prototype, "option2", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksListSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksListSecurity };
var AnalyticsManagementWebPropertyAdWordsLinksListRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksListRequest, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksListRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksListPathParams)
    ], AnalyticsManagementWebPropertyAdWordsLinksListRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksListQueryParams)
    ], AnalyticsManagementWebPropertyAdWordsLinksListRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksListSecurity)
    ], AnalyticsManagementWebPropertyAdWordsLinksListRequest.prototype, "security", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksListRequest;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksListRequest };
var AnalyticsManagementWebPropertyAdWordsLinksListResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksListResponse, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksListResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksListResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EntityAdWordsLinks)
    ], AnalyticsManagementWebPropertyAdWordsLinksListResponse.prototype, "entityAdWordsLinks", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebPropertyAdWordsLinksListResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksListResponse;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksListResponse };
