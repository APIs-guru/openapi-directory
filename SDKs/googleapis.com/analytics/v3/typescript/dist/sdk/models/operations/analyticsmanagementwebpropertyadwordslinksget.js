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
var AnalyticsManagementWebPropertyAdWordsLinksGetPathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksGetPathParams, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksGetPathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetPathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyAdWordsLinkId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetPathParams.prototype, "webPropertyAdWordsLinkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetPathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksGetPathParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksGetPathParams };
var AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams };
var AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1 };
var AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2 = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2 };
var AnalyticsManagementWebPropertyAdWordsLinksGetSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksGetSecurity, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksGetSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetSecurity.prototype, "option1", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, option=true" }),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetSecurity.prototype, "option2", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksGetSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksGetSecurity };
var AnalyticsManagementWebPropertyAdWordsLinksGetRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksGetRequest, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksGetRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksGetPathParams)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksGetSecurity)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetRequest.prototype, "security", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksGetRequest;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksGetRequest };
var AnalyticsManagementWebPropertyAdWordsLinksGetResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksGetResponse, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksGetResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EntityAdWordsLink)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetResponse.prototype, "entityAdWordsLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebPropertyAdWordsLinksGetResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksGetResponse;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksGetResponse };
