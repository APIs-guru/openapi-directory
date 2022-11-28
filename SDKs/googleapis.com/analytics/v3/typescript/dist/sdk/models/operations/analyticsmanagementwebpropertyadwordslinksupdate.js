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
var AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams.prototype, "accountId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyAdWordsLinkId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams.prototype, "webPropertyAdWordsLinkId", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webPropertyId" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams.prototype, "webPropertyId", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams };
var AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=alt" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams.prototype, "alt", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fields" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams.prototype, "fields", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=key" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams.prototype, "key", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=oauth_token" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams.prototype, "oauthToken", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prettyPrint" }),
        __metadata("design:type", Boolean)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams.prototype, "prettyPrint", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quotaUser" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams.prototype, "quotaUser", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=userIp" }),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams.prototype, "userIp", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams };
var AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity.prototype, "oauth2", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" }),
        __metadata("design:type", shared.SchemeOauth2c)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity.prototype, "oauth2c", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity };
var AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksUpdatePathParams)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest.prototype, "pathParams", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksUpdateQueryParams)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest.prototype, "queryParams", void 0);
    __decorate([
        SpeakeasyMetadata({ data: "request, media_type=application/json" }),
        __metadata("design:type", shared.EntityAdWordsLink)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest.prototype, "request", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", AnalyticsManagementWebPropertyAdWordsLinksUpdateSecurity)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest.prototype, "security", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksUpdateRequest };
var AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse = /** @class */ (function (_super) {
    __extends(AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse, _super);
    function AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", String)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse.prototype, "contentType", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", shared.EntityAdWordsLink)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse.prototype, "entityAdWordsLink", void 0);
    __decorate([
        SpeakeasyMetadata(),
        __metadata("design:type", Number)
    ], AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse.prototype, "statusCode", void 0);
    return AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse;
}(SpeakeasyBase));
export { AnalyticsManagementWebPropertyAdWordsLinksUpdateResponse };
